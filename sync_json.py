#!/usr/bin/env python3
"""Sync JSON blocks with XML blocks in pending .md files."""

import re
import os
import subprocess
from collections import OrderedDict
import xml.etree.ElementTree as ET
import sys

BASE_DIR = os.path.dirname(os.path.abspath(__file__))
os.chdir(BASE_DIR)


def strip_ns(tag):
    return re.sub(r'\{[^}]+\}', '', tag)


def xml_text_to_python(text):
    """Convert XML text to Python value (int, float-str tuple, or str)."""
    text = (text or "").strip()
    if not text:
        return ""
    try:
        return int(text)
    except ValueError:
        pass
    if '.' in text:
        try:
            float(text)
            return ('__float__', text)  # keep original decimal string
        except ValueError:
            pass
    return text


def xml_elem_to_python(elem):
    """Recursively convert XML element to Python dict/list/primitive."""
    children = list(elem)

    if not children:
        return xml_text_to_python(elem.text)

    groups = OrderedDict()
    for child in children:
        tag = strip_ns(child.tag)
        if tag not in groups:
            groups[tag] = []
        groups[tag].append(child)

    unique_tags = list(groups.keys())

    if len(unique_tags) == 1:
        tag = unique_tags[0]
        items = groups[tag]
        if len(items) == 1:
            return {tag: xml_elem_to_python(items[0])}
        else:
            return {tag: [xml_elem_to_python(it) for it in items]}
    else:
        result = OrderedDict()
        for tag, group in groups.items():
            if len(group) == 1:
                result[tag] = xml_elem_to_python(group[0])
            else:
                result[tag] = [xml_elem_to_python(it) for it in group]
        return result


def format_val(val, depth=1):
    """Format Python value as JSON string with indentation."""
    sp = "    " * depth
    sp1 = "    " * (depth + 1)

    if isinstance(val, tuple) and len(val) == 2 and val[0] == '__float__':
        return val[1]
    elif isinstance(val, dict):
        if not val:
            return "{}"
        items = list(val.items())
        parts = []
        for i, (k, v) in enumerate(items):
            comma = "," if i < len(items) - 1 else ""
            parts.append(f'{sp1}"{k}": {format_val(v, depth + 1)}{comma}')
        return "{\n" + "\n".join(parts) + f"\n{sp}}}"
    elif isinstance(val, list):
        if not val:
            return "[]"
        parts = []
        for i, item in enumerate(val):
            comma = "," if i < len(val) - 1 else ""
            parts.append(f"{sp1}{format_val(item, depth + 1)}{comma}")
        return "[\n" + "\n".join(parts) + f"\n{sp}]"
    elif isinstance(val, bool):
        return "true" if val else "false"
    elif isinstance(val, int):
        return str(val)
    elif isinstance(val, float):
        return f"{val:.2f}"
    elif isinstance(val, str):
        escaped = val.replace('\\', '\\\\').replace('"', '\\"')
        return f'"{escaped}"'
    elif val is None:
        return "null"
    return f'"{val}"'


_INT_FIELDS = {'Requerimiento', 'Numero'}


def parse_simple_block(elem, int_fields=_INT_FIELDS):
    """Parse a flat XML element into an OrderedDict, coercing known int fields."""
    result = OrderedDict()
    for child in elem:
        tag = strip_ns(child.tag)
        text = (child.text or "").strip()
        if tag in int_fields:
            try:
                result[tag] = int(text) if text else 0
            except Exception:
                result[tag] = 0
        else:
            result[tag] = text
    return result


def sanitize_xml(xml_str):
    """Fix common XML malformations before parsing."""
    # Fix: <tag>text<tag/> → <tag>text</tag>
    xml_str = re.sub(
        r'<([A-Za-z][A-Za-z0-9_]*)>([^<]*?)<\1/>',
        r'<\1>\2</\1>',
        xml_str
    )
    # Fix: <tag>text</Tag> (case mismatch, same name) → <tag>text</tag>
    def fix_case_mismatch(m):
        open_tag = m.group(1)
        content = m.group(2)
        close_tag = m.group(3)
        if open_tag.lower() == close_tag.lower() and open_tag != close_tag:
            return f'<{open_tag}>{content}</{open_tag}>'
        return m.group(0)
    xml_str = re.sub(
        r'<([a-zA-Z][a-zA-Z0-9_]*)>([^<]*?)</([a-zA-Z][a-zA-Z0-9_]*)>',
        fix_case_mismatch,
        xml_str
    )
    return xml_str


def parse_request_xml(xml_str):
    xml_str = sanitize_xml(xml_str)
    try:
        root = ET.fromstring(xml_str)
    except ET.ParseError as e:
        return None, None, None, str(e)

    body = None
    for elem in root.iter():
        if strip_ns(elem.tag) == 'Body':
            body = elem
            break
    if body is None:
        return None, None, None, "No Body element"

    children = list(body)
    if not children:
        return None, None, None, "Empty Body"

    method_elem = children[0]
    service_name = strip_ns(method_elem.tag)

    btinreq = None
    fields = OrderedDict()
    for child in method_elem:
        tag = strip_ns(child.tag)
        if tag == "Btinreq":
            btinreq = parse_simple_block(child)
        else:
            fields[tag] = xml_elem_to_python(child)

    return service_name, btinreq, fields, None


def parse_response_xml(xml_str):
    xml_str = sanitize_xml(xml_str)
    try:
        root = ET.fromstring(xml_str)
    except ET.ParseError as e:
        return None, None, None, str(e)

    body = None
    for elem in root.iter():
        if strip_ns(elem.tag) == 'Body':
            body = elem
            break
    if body is None:
        return None, None, None, "No Body element"

    children = list(body)
    if not children:
        return None, None, None, "Empty Body"

    response_elem = children[0]

    btinreq = None
    data_fields = OrderedDict()
    btoutreq = None

    for child in response_elem:
        tag = strip_ns(child.tag)
        if tag == 'Btinreq':
            btinreq = parse_simple_block(child)
        elif tag == 'Erroresnegocio':
            pass  # always output {"BTErrorNegocio": []}
        elif tag == 'Btoutreq':
            btoutreq = parse_simple_block(child)
        else:
            data_fields[tag] = xml_elem_to_python(child)

    return btinreq, data_fields, btoutreq, None


def format_named_block(name, data, depth=1):
    """Format a dict as an indented JSON block with a given key name."""
    sp = "    " * depth
    sp1 = "    " * (depth + 1)
    lines = [f'"{name}": {{']
    items = list(data.items())
    for i, (k, v) in enumerate(items):
        comma = "," if i < len(items) - 1 else ""
        lines.append(f'{sp1}"{k}": {format_val(v, depth + 1)}{comma}')
    lines.append(f'{sp}}}')
    return f'{sp}' + '\n'.join(lines)


def build_req_curl(url, btinreq, fields):
    sp = "    "
    parts = []

    if btinreq:
        parts.append(format_named_block('Btinreq', btinreq, 1))

    for k, v in fields.items():
        parts.append(f'{sp}"{k}": {format_val(v, 1)}')

    body = ',\n'.join(parts)

    return (
        f"curl -X POST \\\n"
        f"  '{url}' \\\n"
        f"  -H 'cache-control: no-cache' \\\n"
        f"  -H 'content-type: application/json' \\\n"
        f"  -H 'postman-token: 52baf1dc-e302-90a6-0de1-24fa234c0379' \\\n"
        f"  -d '{{\n"
        f"{body}\n"
        f"}}'"
    )


def build_resp_json(btinreq, data_fields, btoutreq):
    sp = "    "
    sp2 = "        "
    parts = []

    if btinreq:
        parts.append(format_named_block('Btinreq', btinreq, 1))

    for k, v in data_fields.items():
        parts.append(f'{sp}"{k}": {format_val(v, 1)}')

    parts.append(
        f'{sp}"Erroresnegocio": {{\n'
        f'{sp2}"BTErrorNegocio": []\n'
        f'{sp}}}'
    )

    if btoutreq:
        parts.append(format_named_block('Btoutreq', btoutreq, 1))

    body = ',\n'.join(parts)
    return f"'{{\n{body}\n}}'"


def process_file(filepath):
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()

    # Get service name
    service_match = re.search(r'\*\*Nombre publicaci[oó]n:\*\*\s+(\S+)', content)
    if not service_match:
        return False, "No service name"

    service_name = service_match.group(1)
    parts = service_name.split('.')
    if len(parts) != 2:
        return False, f"Bad service format: {service_name}"

    service_class, operation = parts
    url = (
        f"http://btd-bantotal.eastus2.cloudapp.azure.com:4462"
        f"/btdeveloper/servlet/com.dlya.bantotal.odwsbt_{service_class}?{operation}"
    )

    # Find request section (handles typos like INVOC0ACIÓN, INVOCACION, etc.)
    req_match = re.search(
        r'(<!-- ABRE EJEMPLO DE INVOC[^\n]*?-->)(.*?)'
        r'(<!-- CIERRA EJEMPLO DE INVOC[^\n]*?-->)',
        content, re.DOTALL
    )
    # Find response section
    resp_match = re.search(
        r'(<!-- ABRE EJEMPLO DE RESPUESTA -->)(.*?)'
        r'(<!-- CIERRA EJEMPLO DE RESPUESTA -->)',
        content, re.DOTALL
    )

    if not req_match:
        return False, "No invocacion section"
    if not resp_match:
        return False, "No respuesta section"

    req_full = req_match.group(0)
    resp_full = resp_match.group(0)

    # Extract XML (with or without code fence wrappers)
    def extract_xml(section):
        m = re.search(r'```xml\n(.*?)```', section, re.DOTALL)
        if m:
            return m.group(1).strip()
        # Try bare XML (no code fence)
        m = re.search(
            r'(<(?:soapenv|SOAP-ENV):Envelope\b.*?</(?:soapenv|SOAP-ENV):Envelope>)',
            section, re.DOTALL
        )
        if m:
            return m.group(1).strip()
        return None

    req_xml = extract_xml(req_full)
    resp_xml = extract_xml(resp_full)

    if not req_xml:
        return False, "No request XML block"
    if not resp_xml:
        return False, "No response XML block"

    # Parse XMLs
    _, btinreq_req, fields, err = parse_request_xml(req_xml)
    if err:
        return False, f"Request XML parse: {err}"

    btinreq_resp, data_fields, btoutreq, err = parse_response_xml(resp_xml)
    if err:
        return False, f"Response XML parse: {err}"

    # Build JSON blocks
    new_req = build_req_curl(url, btinreq_req or {}, fields or {})
    new_resp = build_resp_json(btinreq_resp, data_fields, btoutreq)

    # Replace @tab JSON blocks (handles fenced, bare, and trailing-space variants)
    def replace_json_tab(section_text, new_content):
        # Case 1: fenced ```json block (with optional trailing spaces on @tab line)
        pattern = r'(@tab JSON[ \t]*\n[ \t]*```json[ \t]*\n)(.*?)(```)'
        new_text = re.sub(
            pattern,
            lambda m: '@tab JSON\n```json\n' + new_content + '\n' + m.group(3),
            section_text, count=1, flags=re.DOTALL
        )
        if new_text != section_text:
            return new_text
        # Case 2: bare block (no backticks) — replace until ::: or @tab
        pattern2 = r'(@tab JSON[ \t]*\n[ \t]*\n?)(.*?)(\n?[ \t]*:::)'
        new_text = re.sub(
            pattern2,
            lambda m: '@tab JSON\n```json\n' + new_content + '\n```\n:::',
            section_text, count=1, flags=re.DOTALL
        )
        if new_text != section_text:
            return new_text
        return section_text

    new_req_full = replace_json_tab(req_full, new_req)
    new_resp_full = replace_json_tab(resp_full, new_resp)

    new_content = content.replace(req_full, new_req_full, 1)
    new_content = new_content.replace(resp_full, new_resp_full, 1)

    if new_content == content:
        return False, "No changes (JSON blocks may not have matched)"

    with open(filepath, 'w', encoding='utf-8') as f:
        f.write(new_content)

    return True, "OK"


def get_pending_files():
    result = subprocess.run(
        ['git', 'status', '--short', '-z'],
        capture_output=True
    )
    modified = set()
    for entry in result.stdout.split(b'\x00'):
        try:
            s = entry.decode('utf-8')
            if len(s) >= 3 and 'scripts/' in s:
                path = s[3:].strip()
                modified.add(os.path.normpath(path))
        except Exception:
            pass

    pending = []
    for root, dirs, files in os.walk('scripts'):
        for f in files:
            if f.endswith('.md'):
                p = os.path.normpath(os.path.join(root, f))
                if p not in modified:
                    if (f'scripts{os.sep}V3R1{os.sep}' in p or
                            f'scripts{os.sep}shared{os.sep}' in p):
                        pending.append(p)
    return sorted(pending)


def main():
    test_mode = '--test' in sys.argv
    v3r1_only = '--v3r1' in sys.argv
    shared_only = '--shared' in sys.argv

    pending = get_pending_files()

    if v3r1_only:
        pending = [p for p in pending if f'scripts{os.sep}V3R1{os.sep}' in p]
    elif shared_only:
        pending = [p for p in pending if f'scripts{os.sep}shared{os.sep}' in p]

    if test_mode:
        pending = pending[:5]
        print(f"TEST MODE: {len(pending)} files")

    print(f"Processing {len(pending)} files...")

    success = 0
    errors = []
    for fp in pending:
        ok, msg = process_file(fp)
        if ok:
            success += 1
            if test_mode:
                print(f"  OK: {os.path.basename(fp)}")
        else:
            errors.append((fp, msg))
            if test_mode:
                print(f"  FAIL: {os.path.basename(fp)} -> {msg}")

    print(f"\nDone: {success}/{len(pending)} processed successfully")
    if errors:
        print(f"Errors ({len(errors)}):")
        for fp, msg in errors[:50]:
            print(f"  {os.path.relpath(fp)}: {msg}")


if __name__ == '__main__':
    main()
