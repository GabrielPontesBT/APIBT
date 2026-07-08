import {
  Component,
  Input,
  OnInit,
  OnChanges,
  SimpleChanges,
  AfterViewChecked,
  ElementRef,
  ViewChildren,
  QueryList
} from '@angular/core';
import * as Prism from 'prismjs';
import 'prismjs/components/prism-markup.js';
import 'prismjs/components/prism-json.min.js';
import 'prismjs/components/prism-bash.min.js';
import { DocExampleTab } from '../../../../core/models/doc-page.model';

@Component({
    selector: 'app-code-example',
    templateUrl: './code-example.component.html',
    styleUrls: ['./code-example.component.scss'],
    standalone: false
})
export class CodeExampleComponent implements OnInit, OnChanges, AfterViewChecked {
  readonly sections: Array<'invocation' | 'response'> = ['invocation', 'response'];

  @Input() examples!: {
    invocation: { xml: string; json: string; tabs?: DocExampleTab[] };
    response:   { xml: string; json: string; tabs?: DocExampleTab[] };
  };

  view: {
    invocation: 'xml' | 'json';
    response:   'xml' | 'json';
  } = {
    invocation: 'xml',
    response:   'xml'
  };

  selectedTab: { invocation: number; response: number } = {
    invocation: 0,
    response: 0
  };

  highlightedCode: {
    invocation: { xml: string; json: string };
    response:   { xml: string; json: string };
  } = {
    invocation: { xml: '', json: '' },
    response:   { xml: '', json: '' }
  };

  highlightedTabs: { invocation: string[]; response: string[] } = {
    invocation: [],
    response: []
  };

  @ViewChildren('codeBlock') codeBlocks!: QueryList<ElementRef>;

  copiedSection: 'invocation' | 'response' | null = null;
  private needsRehighlight = false;

  getTabLabel(section: 'invocation' | 'response'): string {
    return section === 'invocation' ? 'Ejemplo de Invocación' : 'Ejemplo de Respuesta';
  }

  hasTabs(section: 'invocation' | 'response'): boolean {
    return (this.examples[section].tabs?.length ?? 0) > 0;
  }

  getTabs(section: 'invocation' | 'response'): DocExampleTab[] {
    return this.examples[section].tabs ?? [];
  }

  hasXml(section: 'invocation' | 'response'): boolean {
    return !!this.examples[section].xml;
  }

  hasJson(section: 'invocation' | 'response'): boolean {
    return !!this.examples[section].json;
  }

  ngOnInit() {
    this.initViews();
    this.updateHighlight();
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['examples'] && !changes['examples'].isFirstChange()) {
      this.initViews();
      this.updateHighlight();
    }
  }

  private initViews() {
    for (const section of this.sections) {
      this.selectedTab[section] = 0;
      if (!this.examples[section].xml) {
        this.view[section] = 'json';
      } else if (!this.examples[section].json) {
        this.view[section] = 'xml';
      }
    }
  }

  ngAfterViewChecked(): void {
    if (this.needsRehighlight && this.codeBlocks) {
      this.codeBlocks.forEach(block => {
        Prism.highlightAllUnder(block.nativeElement);
      });
      this.needsRehighlight = false;
    }
  }

  switchView(section: 'invocation' | 'response', newView: 'xml' | 'json') {
    this.view[section] = newView;
    this.updateHighlight();
  }

  switchTab(section: 'invocation' | 'response', index: number) {
    this.selectedTab[section] = index;
    this.needsRehighlight = true;
  }

  copyCode(section: 'invocation' | 'response') {
    let text: string;
    if (this.hasTabs(section)) {
      text = this.getTabs(section)[this.selectedTab[section]]?.code ?? '';
    } else {
      text = this.examples[section][this.view[section]];
    }

    const onSuccess = () => {
      this.copiedSection = section;
      setTimeout(() => { this.copiedSection = null; }, 2000);
    };

    if (navigator.clipboard) {
      navigator.clipboard.writeText(text).then(onSuccess).catch(() => {
        this.fallbackCopy(text, onSuccess);
      });
    } else {
      this.fallbackCopy(text, onSuccess);
    }
  }

  private fallbackCopy(text: string, onSuccess: () => void) {
    const textarea = document.createElement('textarea');
    textarea.value = text;
    textarea.style.position = 'fixed';
    textarea.style.opacity = '0';
    document.body.appendChild(textarea);
    textarea.focus();
    textarea.select();
    try {
      if (document.execCommand('copy')) {
        onSuccess();
      }
    } finally {
      document.body.removeChild(textarea);
    }
  }

  private highlightPlaceholders(html: string): string {
    return html.replace(/\{\{([^}]+)\}\}/g, '<span class="placeholder">{{$1}}</span>');
  }

  private highlightQueryParamValues(html: string): string {
    return html.replace(
      /([?]|&amp;)([^=<>'"&\s]+)=([^&<>'"?\s]+)/g,
      (match, sep, key, value) => {
        if (!value || value.startsWith('<')) return match;
        return `${sep}${key}=<span class="param-value">${value}</span>`;
      }
    );
  }

  private postProcess(html: string): string {
    return this.highlightQueryParamValues(this.highlightPlaceholders(html));
  }

  private updateHighlight() {
    for (const section of this.sections) {
      const data = this.examples[section];
      this.highlightedCode[section].xml  = this.postProcess(Prism.highlight(data.xml  || '', Prism.languages['markup'], 'xml'));
      this.highlightedCode[section].json = this.postProcess(Prism.highlight(data.json || '', Prism.languages['json'],   'json'));
      this.highlightedTabs[section] = (data.tabs ?? []).map(tab => {
        const lang = Prism.languages[tab.lang] ? tab.lang : 'markup';
        return this.postProcess(Prism.highlight(tab.code, Prism.languages[lang], lang));
      });
    }
    this.needsRehighlight = true;
  }
}
