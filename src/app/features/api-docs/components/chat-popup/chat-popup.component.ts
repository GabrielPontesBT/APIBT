import {
  Component,
  OnInit,
  AfterViewInit,
  ViewChild,
  ElementRef,
  HostListener
} from '@angular/core';
import { trigger, transition, style, animate } from '@angular/animations';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { ChatService } from '../../../../core/services/chat.service';
import DOMPurify from 'dompurify';
interface Message { text: SafeHtml; isUser: boolean; }
interface ChatEntry { role: string; content: string /* raw text */; }


@Component({
  selector: 'app-chat-popup',
  templateUrl: './chat-popup.component.html',
  styleUrls: ['./chat-popup.component.scss', '../code-example/code-example.component.scss'],
  animations: [
    trigger('popupFromButton', [
      // Fallback para :enter (primer render)
      transition(':enter', [
        style({ opacity: 0, transform: 'scale(0)' }),
        animate('300ms ease-out', style({ opacity: 1, transform: 'scale(1)' }))
      ]),
      transition('open => closed', [
        animate('300ms ease-in', style({ opacity: 0, transform: 'scale(0)' }))
      ]),
      transition('closed => open', [
        style({ opacity: 0, transform: 'scale(0)' }),
        animate('300ms ease-out', style({ opacity: 1, transform: 'scale(1)' }))
      ])
    ]),
    trigger('messageAnim', [
      transition(':enter', [
        style({ opacity: 0, transform: 'scale(0.95)' }),
        animate('600ms ease', style({ opacity: 1, transform: 'scale(1)' }))
      ])
    ])
  ]
})
export class ChatPopupComponent implements OnInit, AfterViewInit {
  @ViewChild('inputRef') inputRef!: ElementRef<HTMLInputElement>;
  @ViewChild('chatMessages') chatMessagesRef!: ElementRef<HTMLElement>;

  readCode = false;
  afterNl = ''
  renderChat = false;
  showChat = false;
  inputMessage = '';
  messages: Message[] = [];
  messagesHTML: Message[] = [];
  loading = false;
  typingIndicator = false;
  chatHistory: ChatEntry[] = [];
  public safeHtml!: SafeHtml;

  constructor(
    private chatService: ChatService,
    private sanitizer: DomSanitizer
  ) {}

  ngOnInit() {
    (window as any).copyCode = this.copyCode.bind(this);
    this.loadChatHistory();
    if (!this.messages.length) {
      this.clearChatHistory();
    }
  }

  private copyCode(button:any) {
      const codeElement = button.parentElement.querySelector("code");

      if (!codeElement) {
        console.error("Code element not found!");
        return;
      }

      let textToCopy = codeElement.innerText || codeElement.textContent;

      if (!textToCopy) {
        console.error("No text found in the code element.");
        return;
      }

      textToCopy = textToCopy.replace(/\r?\n/g, '\n');

      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(textToCopy)
          .then(() => {
            // button.textContent = "Copiado";
            // button.style.color = "var(--text-color)";
            // button.style.backgroundImage = "none";
            // setTimeout(() => {
            //   button.textContent = "";
            //   button.style.color = ""; // Restaurá el color original
            //   button.style.backgroundImage = "var(--code-copy-icon)";
            // }, 2000);
          })
          .catch(err => {
            console.error("Failed to copy text: ", err);
            alert("Failed to copy text. Please try again.");
          });
      } else {
        const textarea = document.createElement("textarea");
        textarea.value = textToCopy;
        document.body.appendChild(textarea);
        textarea.select();
        try {
          document.execCommand("copy");
          // button.textContent = "Copiado";
          // button.style.color = "var(--text-color)";
          // button.style.backgroundImage = "none";
          // setTimeout(() => {
          //   button.textContent = "";
          //   button.style.color = "";
          //   button.style.backgroundImage = "var(--code-copy-icon)";
          // }, 2000);
        } catch (err) {
          console.error("Fallback: Failed to copy text: ", err);
          alert("Failed to copy text. Please try again.");
        }
        document.body.removeChild(textarea);
      }
    }
  ngAfterViewInit() {
    const c = document.querySelector('.chat-messages');
    if (c) {
      new MutationObserver(() => this.scrollToBottom())
        .observe(c, { childList: true });
    }
  }

  toggleChat() {
    if (!this.renderChat) {
      this.renderChat = true;
      this.showChat = true;
      setTimeout(() => {
        this.inputRef?.nativeElement.focus();
        this.scrollToBottom();
      }, 0);
    } else {
      this.showChat = !this.showChat;
    }
  }

  onAnimationDone(event: any) {
    if (event.toState === 'closed') {
      this.renderChat = false;
    }
  }

  clearChatHistory() {
    this.messages = [
      { text: '¡Hola!, ¿En qué puedo ayudarte?', isUser: false }
    ];
    this.messagesHTML = [
      { text: '¡Hola!, ¿En qué puedo ayudarte?', isUser: false }
    ];
    this.chatHistory = [];
    localStorage.clear();
    this.chatService.iniciarSesion().catch(console.error);
  }

  loadChatHistory() {
    const savedMsgs = localStorage.getItem('messages');
    if (savedMsgs) {
      JSON.parse(savedMsgs).forEach((m: any) => {
        this.messages.push({ text: m.text, isUser: m.isUser })

        const clean = DOMPurify.sanitize(m.text, {
          ALLOWED_TAGS: ['div', 'span', 'code', 'button', 'mat-icon', 'pre', 'a', 'strong', 'li', 'h1', 'h2', 'h3', 'br'],
          ALLOWED_ATTR: ['class', 'onclick', 'style', 'href', 'target']
        });
        this.messagesHTML.push({ text: this.sanitizer.bypassSecurityTrustHtml(clean), isUser: m.isUser })
      });
    }
    const savedHist = localStorage.getItem('chatHistory');
    if (savedHist) {
      this.chatHistory = JSON.parse(savedHist);
    }
    this.scrollToBottom();
  }

  saveChatHistory() {
    localStorage.setItem('messages',
      JSON.stringify(this.messages.map(m => ({ text: m.text.toString(), isUser: m.isUser })))
    );
    localStorage.setItem('chatHistory', JSON.stringify(this.chatHistory));
  }

  sendMessage() {
    const txt = this.inputMessage.trim();
    if (!txt) return;

    this.messages.push({ text: txt, isUser: true });
    this.messagesHTML.push({ text: txt, isUser: true });
    this.chatHistory.push({ role: 'user', content: txt });
    this.inputMessage = '';
    this.loading = true;
    this.typingIndicator = true;
    this.scrollToBottom();

    const sid = localStorage.getItem('chatSessionId');
    if (sid) {
      this.proceedChat(txt);
    } else {
      this.chatService.iniciarSesion()
        .then(() => this.proceedChat(txt))
        .catch(err => {
          console.error(err);
          this.messages.push({
            text: 'Error iniciando sesión.',
            isUser: false
          });
          this.loading = this.typingIndicator = false;
        });
    }
  }

  private chunkProcess = (text:any) => {
    if (this.readCode){
      return text
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/\t/g, '&nbsp;&nbsp;&nbsp;&nbsp;') // 4 espacios reales, no &nbsp;
    }
    else {
      return text
        .replace(/</g, '<')
        .replace(/>/g, '>')
        .replace(/\|\|/g, '<br>')
        .replace(/\t/g, '&nbsp;&nbsp;&nbsp;&nbsp;') // 4 espacios reales, no &nbsp;
    }
  };

  private proceedChat(userMsg: string) {
    this.chatHistory.push({ role: 'assistant', content: '' });
    this.messages.push({ text: '', isUser: false });
    this.messagesHTML.push({ text: '', isUser: false });
    const msgIdx = this.messages.length - 1;
    const histIdx = this.chatHistory.length - 1;

    this.chatService.streamMessages(userMsg, this.chatHistory)
      .subscribe({
        next: chunk => {
          var text_to_process = this.afterNl + chunk;
          this.afterNl = '';
          const processed = this.chunkProcess(text_to_process);

          let fullMessage = this.messages[msgIdx].text + processed;
          const prev = this.chatHistory[histIdx].content;
          const tentative = prev + processed;

          if (/\n/.test(processed)) {
            const idx = tentative.lastIndexOf('\n');
            const upToNl = tentative.slice(0, idx + 1);
            this.afterNl = tentative.slice(idx + 1);
            const fmtUpToNl = this.formatMessage(upToNl);
            fullMessage = fmtUpToNl;
          }

          const clean = DOMPurify.sanitize(fullMessage, {
            ALLOWED_TAGS: ['div', 'span', 'code', 'button', 'mat-icon', 'pre', 'a', 'strong', 'li', 'h1', 'h2', 'h3', 'br'],
            ALLOWED_ATTR: ['class', 'onclick', 'style', 'href', 'target']
          });

          this.messagesHTML[msgIdx].text = this.sanitizer.bypassSecurityTrustHtml(clean);
          this.messages[msgIdx].text = fullMessage;
          this.chatHistory[histIdx].content = fullMessage;

          this.scrollToBottom();
        },
        error: err => {
          console.error(err);
          this.messages.push({ text: 'Error en la solicitud.', isUser: false });
          this.messagesHTML.push({ text: 'Error en la solicitud.', isUser: false });
          this.finalize();
        },
        complete: () => {
          this.finalize();

          // ✅ Hacer foco cuando terminó de responder
          setTimeout(() => {
            const el = this.inputRef.nativeElement;
            el.focus();
            el.select(); // opcional: selecciona el texto si quedó algo
          }, 0);
        }
      });
  }

  private finalize() {
    this.loading = false;
    this.typingIndicator = false;
    this.saveChatHistory();
  }

  /** Escape HTML chars in code blocks */
  private escapeHtml(str: string): string {
    return str
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;');
  }



  /**
   * Apply Markdown-like formatting:
   * - Extract and escape ```xml```/```json``` blocks
   * - Bold **text**, headings, lists, links
   * - Convert single \n → <br/>
   */


  private formatMessage = (message) => {
      // Procesar JSON
      let formattedMessage = message;

      if (!this.readCode) {
        // Agregar un espacio en blanco después de "por favor", ya que siempre queda pegado a la siguiente palabra
        formattedMessage = formattedMessage.replace(/(por favor\.)/gi, '$1 ');

        // Agregar un único salto de línea después de cada punteo numerado
        formattedMessage = formattedMessage.replace(/(\d+\.\s[^\n]+)/g, '$1\n');

        // Eliminar cualquier acumulación de saltos de línea (deja solo uno)
        formattedMessage = formattedMessage.replace(/\n+/g, '\n');

        // Convertir enlaces en Markdown a HTML
        const linkRegex = /\[([^\]]+)\]\((https?:\/\/[^\s)]+)\)/g;
        formattedMessage = formattedMessage.replace(linkRegex, '<a href="$2" target="_blank">$1</a>');

        // Convertir encabezados (hasta ####)
        formattedMessage = formattedMessage
          .replace(/####\s*(.+?)(?:\n|$)/g, '<h3><strong>$1</strong></h3>')
          .replace(/###\s*(.+?)(?:\n|$)/g, '<h2><strong>$1</strong></h2>')
          .replace(/##\s*(.+?)(?:\n|$)/g, '<h2><strong>$1</strong></h2>')
          .replace(/#\s*(.+?)(?:\n|$)/g, '<h1><strong>$1</strong></h1>');

        // Manejar negritas
        formattedMessage = formattedMessage.replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>');

        // Manejar listas con guiones
        formattedMessage = formattedMessage.replace(/-\s(.+?)(?:\n|$)/g, '<li>$1</li>');

        // Convertir saltos de línea a <br/> para HTML
        formattedMessage = formattedMessage.replace(/\n/g, '<br/>');

      }

      // Procesar JSON
      formattedMessage = formattedMessage.replace(/((```json)|(<div class="mat-mdc-tab-body-content" style="transform: none;"><pre class="language-json"><code class="language-json">))([\s\S]+?)/g, (match, p1, p2, p3, p4) => {
        const escapedContent = p4
          .replace(/&/g, '&') // Escapar `&`
          .replace(/</g, '<') // Escapar `<`
          .replace(/>/g, '>'); // Escapar `<`
        this.readCode = true
        return `<div class="mat-mdc-tab-body-content">
          <div class="chat-code-wrapper">
            <button class="mat-icon-button-chat" onclick="copyCode(this)">
              <mat-icon class="mat-icon notranslate material-icons mat-ligature-font mat-icon-no-color">content_copy</mat-icon>
            </button>
            <pre class="language-json">
              <code class="language-json">${escapedContent}`;

      });

      var regex = /```xml/;
      if (regex.test(formattedMessage)){
          //console.log("leo xml")
          this.readCode = true
      }

      // Procesar XML
    const start_xml_code = [
      `<div class="mat-mdc-tab-body-content">`,
      `  <div class="chat-code-wrapper">`,
      `    <button class="mat-icon-button-chat" onclick="copyCode(this)">`,
      `      <mat-icon class="mat-icon notranslate material-icons mat-ligature-font mat-icon-no-color">content_copy</mat-icon>`,
      `    </button>`,
      `    <pre class="language-xml">`,
      `      <code class="language-xml">`
].join('');



      formattedMessage = formattedMessage.replace(/```xml/g, start_xml_code);

      if (/```/.test(formattedMessage)) {
        //console.log('fin xml');
        //console.log('before replace:', formattedMessage);

        const replacement = `</code></pre></div></div>`;

        // split/join para forzar el reemplazo literal
        formattedMessage = formattedMessage.split('```').join(replacement);

        //console.log(' after replace:', formattedMessage);
        this.readCode = false;
      }

      //Estilos para el código
      formattedMessage = formattedMessage.replace(/("([^"]+)")(\s*:\s*)("[^"]*")/g, (match, key, keyName, colon, value) => {
        // Elimina las comillas iniciales y finales del valor
        const rawValue = value.slice(1, -1);

        // Verifica si el valor ya tiene el formato aplicado
        if (!rawValue.startsWith('<span class="token string">')) {
          value = `<span class="token string">"${rawValue}"</span>`;
        }

        return `${key}${colon}${value}`;
      });
      formattedMessage = formattedMessage.replace(/(?<!\<span class="token property">)(\&lt\;.*?\&gt\;)(?<!\<\/span>)/g, (match, p1, p2, p3) => {
        return `<span class="token property">${p1}</span>`;
      });
      formattedMessage = formattedMessage.replace(/(?<!<span class="token property">)"([^"]+)":(?<!<\/span>)/g, (match, p1) => {
        // `p1` es la clave JSON (sin comillas)
        return `<span class="token property">"${p1}":</span>`;
      });
      formattedMessage = formattedMessage.replace(/(?<!div)(?<!pre)(?<!title)(?<!style)(?<!button)(?<!class)(?<!onclick)(?<!<span class="token string">)([:=]\s*?)"([^"]+)"(?<!<\/span>)/g, (match, p1, p2) => {
        return `<span class="token string">${p1}"${p2}"</span>`;
      });

    //console.log(' definitive replace:', formattedMessage);
      return formattedMessage;
    };

  /** Handle copy button clicks */
  @HostListener('click', ['$event'])
  onHostClick(e: MouseEvent) {
    const btn = (e.target as HTMLElement).closest('.copy-button') as HTMLElement;
    if (!btn) return;
    e.stopPropagation();
    e.preventDefault();
    const code = btn.parentElement?.querySelector('code');
    if (!code) return;
    // navigator.clipboard.writeText(code.textContent || '').then(() => {
    //   btn.textContent = 'Copiado';
    //   setTimeout(() => (btn.textContent = 'Copiar'), 2000);
    // });
  }

  private scrollToBottom() {
    setTimeout(() => {
      if (this.chatMessagesRef) {
        const el = this.chatMessagesRef.nativeElement;
        el.scrollTop = el.scrollHeight;
      }
    }, 0); // asegura que el DOM esté listo
  }
}
