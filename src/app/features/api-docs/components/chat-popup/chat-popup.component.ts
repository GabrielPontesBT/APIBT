import {
  Component,
  OnInit,
  AfterViewInit,
  ViewChild,
  ElementRef,
  ChangeDetectorRef
} from '@angular/core';
import { trigger, transition, style, animate } from '@angular/animations';
import { ChatService } from '../../../../core/services/chat.service';

interface Message { text: string; isUser: boolean; }
interface ChatEntry { role: string; content: string; }

@Component({
  selector: 'app-chat-popup',
  templateUrl: './chat-popup.component.html',
  styleUrls: ['./chat-popup.component.scss', '../code-example/code-example.component.scss'],
  animations: [
    trigger('slideUp', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(100%)' }),
        animate('520ms cubic-bezier(0.4, 0, 0.6, 1)', style({ opacity: 1, transform: 'translateY(0)' }))
      ]),
      transition(':leave', [
        animate('350ms cubic-bezier(0.4, 0, 0.6, 1)', style({ opacity: 0, transform: 'translateY(100%)' }))
      ])
    ]),
    trigger('messageAnim', [
      transition(':enter', [
        style({ opacity: 0, transform: 'scale(0.95)' }),
        animate('600ms ease', style({ opacity: 1, transform: 'scale(1)' }))
      ])
    ])
  ],
  standalone: false
})
export class ChatPopupComponent implements OnInit, AfterViewInit {
  @ViewChild('inputRef') inputRef!: ElementRef<HTMLInputElement>;
  @ViewChild('chatMessages') chatMessagesRef!: ElementRef<HTMLElement>;

  renderChat = false;
  showChat = false;
  inputMessage = '';
  messages: Message[] = [];
  loading = false;
  typingIndicator = false;
  chatHistory: ChatEntry[] = [];

  constructor(
    private chatService: ChatService,
    private cdr: ChangeDetectorRef
  ) { }

  ngOnInit() {
    this.loadChatHistory();
    if (!this.messages.length) {
      this.clearChatHistory();
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
    this.renderChat = !this.renderChat;
    if (this.renderChat) {
      setTimeout(() => {
        this.inputRef?.nativeElement.focus();
        this.scrollToBottom();
        this.injectCopyButtons();
      }, 0);
    }
  }

  clearChatHistory() {
    this.messages = [{ text: '¡Hola!, ¿En qué puedo ayudarte?', isUser: false }];
    this.chatHistory = [];
    localStorage.clear();
    this.chatService.iniciarSesion().catch(console.error);
  }

  loadChatHistory() {
    const savedMsgs = localStorage.getItem('messages');
    if (savedMsgs) {
      this.messages = JSON.parse(savedMsgs);
    }
    const savedHist = localStorage.getItem('chatHistory');
    if (savedHist) {
      this.chatHistory = JSON.parse(savedHist);
    }
    this.scrollToBottom();
  }

  saveChatHistory() {
    localStorage.setItem('messages', JSON.stringify(this.messages));
    localStorage.setItem('chatHistory', JSON.stringify(this.chatHistory));
  }

  sendMessage() {
    const txt = this.inputMessage.trim();
    if (!txt) return;

    this.messages.push({ text: txt, isUser: true });
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
          this.messages.push({ text: 'Error iniciando sesión.', isUser: false });
          this.loading = this.typingIndicator = false;
        });
    }
  }

  private proceedChat(userMsg: string) {
    this.messages.push({ text: '', isUser: false });
    const msgIdx = this.messages.length - 1;

    this.chatHistory.push({ role: 'assistant', content: '' });
    const histIdx = this.chatHistory.length - 1;

    let rawText = '';

    this.chatService.streamMessages(userMsg)
      .subscribe({
        next: chunk => {
          rawText += chunk;
          this.messages[msgIdx].text = rawText;
          this.chatHistory[histIdx].content = rawText;
          this.cdr.detectChanges();
          this.scrollToBottom();
        },
        error: err => {
          console.error(err);
          this.messages.push({ text: 'Error en la solicitud.', isUser: false });
          this.finalize();
        },
        complete: () => {
          this.finalize();
          setTimeout(() => {
            this.inputRef.nativeElement.focus();
            this.inputRef.nativeElement.select();
          }, 0);
        }
      });
  }

  private finalize() {
    this.loading = false;
    this.typingIndicator = false;
    this.saveChatHistory();
    this.cdr.detectChanges();
    setTimeout(() => this.injectCopyButtons(), 50);
  }

  private injectCopyButtons() {
    const botMessages = document.querySelectorAll('.bot-message');
    botMessages.forEach(msg => {
      msg.querySelectorAll<HTMLElement>('pre[class*="language-"]').forEach(pre => {
        if (pre.parentElement?.classList.contains('chat-code-wrapper')) return;

        const wrapper = document.createElement('div');
        wrapper.className = 'chat-code-wrapper';

        const btn = document.createElement('button');
        btn.className = 'mat-icon-button-chat';
        btn.title = 'Copiar código';
        btn.innerHTML = '<span class="copy-label">Copiar</span><span class="material-icons">content_copy</span>';

        btn.addEventListener('click', () => {
          const code = pre.querySelector('code')?.textContent ?? '';
          navigator.clipboard.writeText(code).then(() => {
            btn.innerHTML = '<span class="copy-label">¡Copiado!</span><span class="material-icons">check</span>';
            btn.classList.add('copied');
            setTimeout(() => {
              btn.innerHTML = '<span class="copy-label">Copiar</span><span class="material-icons">content_copy</span>';
              btn.classList.remove('copied');
            }, 2000);
          }).catch(console.error);
        });

        pre.parentNode!.insertBefore(wrapper, pre);
        wrapper.appendChild(pre);
        wrapper.appendChild(btn);
      });
    });
  }

  private scrollToBottom() {
    setTimeout(() => {
      if (this.chatMessagesRef) {
        const el = this.chatMessagesRef.nativeElement;
        el.scrollTop = el.scrollHeight;
      }
    }, 0);
  }
}
