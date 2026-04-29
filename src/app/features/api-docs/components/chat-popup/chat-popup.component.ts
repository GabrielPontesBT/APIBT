import {
  Component,
  OnInit,
  AfterViewInit,
  OnDestroy,
  ViewChild,
  ElementRef,
  ChangeDetectorRef
} from '@angular/core';
import { trigger, transition, style, animate } from '@angular/animations';
import { Subscription } from 'rxjs';
import { skip } from 'rxjs/operators';
import { ChatService } from '../../../../core/services/chat.service';
import { VersionService } from '../../../../core/services/version.service';

interface Message { text: string; isUser: boolean; streaming?: boolean; }
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
export class ChatPopupComponent implements OnInit, AfterViewInit, OnDestroy {
  @ViewChild('inputRef') inputRef!: ElementRef<HTMLInputElement>;
  @ViewChild('chatMessages') chatMessagesRef!: ElementRef<HTMLElement>;

  renderChat = false;
  showChat = false;
  inputMessage = '';
  messages: Message[] = [];
  loading = false;
  typingIndicator = false;
  chatHistory: ChatEntry[] = [];

  private versionSub!: Subscription;

  constructor(
    private chatService: ChatService,
    private versionService: VersionService,
    private cdr: ChangeDetectorRef
  ) { }

  ngOnInit() {
    this.loadChatHistory();
    if (!this.messages.length) {
      this.clearChatHistory();
    }

    this.versionSub = this.versionService.activeVersion$
      .pipe(skip(1))
      .subscribe(() => this.clearChatHistory());
  }

  ngOnDestroy() {
    this.versionSub?.unsubscribe();
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
    this.chatService.clearSession();
    localStorage.removeItem(this.messagesKey());
    localStorage.removeItem(this.historyKey());
    this.chatService.iniciarSesion().catch(console.error);
    this.cdr.detectChanges();
  }

  private messagesKey(): string {
    return `messages-${this.versionService.activeVersion}`;
  }

  private historyKey(): string {
    return `chatHistory-${this.versionService.activeVersion}`;
  }

  loadChatHistory() {
    const savedMsgs = localStorage.getItem(this.messagesKey());
    if (savedMsgs) {
      this.messages = JSON.parse(savedMsgs);
    }
    const savedHist = localStorage.getItem(this.historyKey());
    if (savedHist) {
      this.chatHistory = JSON.parse(savedHist);
    }
    this.scrollToBottom();
  }

  saveChatHistory() {
    localStorage.setItem(this.messagesKey(), JSON.stringify(this.messages));
    localStorage.setItem(this.historyKey(), JSON.stringify(this.chatHistory));
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

    if (this.chatService.hasSession()) {
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

  private preprocessMarkdown(text: string): string {
    const lines = text.split('\n');
    let inBlock = false;
    return lines.map(line => {
      if (!inBlock && /^```/.test(line)) {
        inBlock = true;
        return /^```(\s*|none)\s*$/.test(line) ? '```text' : line;
      }
      if (inBlock && /^```\s*$/.test(line)) {
        inBlock = false;
      }
      return line;
    }).join('\n');
  }

  private proceedChat(userMsg: string) {
    this.messages.push({ text: '', isUser: false, streaming: true });
    const msgIdx = this.messages.length - 1;

    this.chatHistory.push({ role: 'assistant', content: '' });
    const histIdx = this.chatHistory.length - 1;

    let fullText = '';
    let displayedLen = 0;
    let streamDone = false;
    let intervalId: ReturnType<typeof setInterval> | null = null;

    const CHARS_PER_TICK = 8;

    const startTypewriter = () => {
      if (intervalId !== null) return;
      intervalId = setInterval(() => {
        if (displayedLen < fullText.length) {
          displayedLen = Math.min(fullText.length, displayedLen + CHARS_PER_TICK);
          this.messages[msgIdx] = { text: fullText.slice(0, displayedLen), isUser: false, streaming: true };
          this.cdr.detectChanges();
          this.scrollToBottom();
        } else if (streamDone) {
          clearInterval(intervalId!);
          intervalId = null;
          this.messages[msgIdx] = { text: this.preprocessMarkdown(fullText), isUser: false, streaming: false };
          this.finalize();
          setTimeout(() => {
            this.inputRef.nativeElement.focus();
            this.inputRef.nativeElement.select();
          }, 0);
        }
      }, 16);
    };

    this.chatService.streamMessages(userMsg).subscribe({
      next: chunk => {
        fullText += chunk;
        this.chatHistory[histIdx].content = fullText;
        startTypewriter();
      },
      error: err => {
        console.error(err);
        if (intervalId !== null) { clearInterval(intervalId); intervalId = null; }
        this.messages[msgIdx] = { text: 'Error en la solicitud.', isUser: false, streaming: false };
        this.finalize();
      },
      complete: () => {
        streamDone = true;
        startTypewriter();
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
