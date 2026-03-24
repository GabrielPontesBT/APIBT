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

@Component({
  selector: 'app-code-example',
  templateUrl: './code-example.component.html',
  styleUrls: ['./code-example.component.scss']
})
export class CodeExampleComponent implements OnInit, OnChanges, AfterViewChecked {
  readonly sections: Array<'invocation' | 'response'> = ['invocation', 'response'];

  @Input() examples!: {
    invocation: { xml: string; json: string };
    response:   { xml: string; json: string };
  };

  view: {
    invocation: 'xml' | 'json';
    response:   'xml' | 'json';
  } = {
    invocation: 'xml',
    response:   'xml'
  };

  highlightedCode: {
    invocation: { xml: string; json: string };
    response:   { xml: string; json: string };
  } = {
    invocation: { xml: '', json: '' },
    response:   { xml: '', json: '' }
  };

  @ViewChildren('codeBlock') codeBlocks!: QueryList<ElementRef>;

  private needsRehighlight = false;

  getTabLabel(section: 'invocation' | 'response'): string {
    return section === 'invocation' ? 'Ejemplo de Invocación' : 'Ejemplo de Respuesta';
  }

  ngOnInit() {
    this.updateHighlight();
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['examples'] && !changes['examples'].isFirstChange()) {
      this.updateHighlight();
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

  copyCode(section: 'invocation' | 'response') {
    const text = this.examples[section][this.view[section]];
    navigator.clipboard.writeText(text);
  }

  private updateHighlight() {
    for (const section of this.sections) {
      const data = this.examples[section];
      this.highlightedCode[section].xml = Prism.highlight(data.xml, Prism.languages['markup'], 'xml');
      this.highlightedCode[section].json = Prism.highlight(data.json, Prism.languages['json'], 'json');
    }
    this.needsRehighlight = true;
  }
}
