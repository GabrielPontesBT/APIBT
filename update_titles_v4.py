import os
import re


def camel_to_title(camel_str):
    """Convert camelCase to Title Case words, preserving acronyms (e.g. GUID)."""
    # Insert space before uppercase letters that follow lowercase letters
    s = re.sub(r'([a-z])([A-Z])', r'\1 \2', camel_str)
    words = s.split()
    return ' '.join(word[0].upper() + word[1:] for word in words)


def process_file(filepath):
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()

    # Find "Nombre publicación" — handles ó and o variants
    match = re.search(r'\*\*Nombre publicaci[oó]n:\*\*\s+\S+\.(\S+)', content)
    if not match:
        print(f"  SKIP (sin 'Nombre publicación'): {filepath}")
        return False

    method_name = match.group(1)
    new_title = camel_to_title(method_name)

    # Find the title line in the YAML frontmatter
    title_match = re.search(r'^title:.*$', content, flags=re.MULTILINE)
    if not title_match:
        print(f"  SKIP (sin title): {filepath}")
        return False

    old_title_line = title_match.group(0)
    new_title_line = f'title: {new_title}'

    if old_title_line == new_title_line:
        print(f"  SKIP (ya correcto): {os.path.basename(filepath)}")
        return False

    new_content = content.replace(old_title_line, new_title_line, 1)

    with open(filepath, 'w', encoding='utf-8') as f:
        f.write(new_content)

    print(f"  OK: {os.path.relpath(filepath)}")
    print(f"      '{old_title_line}' → '{new_title_line}'")
    return True


def main():
    base_dir = os.path.join('scripts', 'V4')

    if not os.path.exists(base_dir):
        print(f"Error: directorio no encontrado: {base_dir}")
        print("Ejecutar desde la raíz del proyecto.")
        return

    updated = 0
    skipped = 0

    for root, dirs, files in os.walk(base_dir):
        for filename in sorted(files):
            if filename.endswith('.md'):
                filepath = os.path.join(root, filename)
                if process_file(filepath):
                    updated += 1
                else:
                    skipped += 1

    print(f"\nResumen:")
    print(f"  Actualizados: {updated}")
    print(f"  Omitidos:     {skipped}")


if __name__ == '__main__':
    main()
