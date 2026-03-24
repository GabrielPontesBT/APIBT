import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

interface SessionResponse {
  data: { sessionId: string };
}
interface ChatEntry { role: string; content: string; }

@Injectable({ providedIn: 'root' })
export class ChatService {
  private sessionUrl = 'http://btcanales.dlya.corp:3070/api/agents/session';
  private chatUrl    = 'http://btcanales.dlya.corp:3070/api/agents/APIBT';
  private apiKey     = 'fI5Th4x6KH71mLPCjlRQbHSvWowqgETy';

  constructor() {}

  /**
   * Inicia sesión usando fetch y almacena el sessionId en localStorage
   */
  iniciarSesion(): Promise<string> {
    const payload = { agent: 'APIBT', user: '1.1.1.1' };
    return fetch(this.sessionUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'apikey': this.apiKey
      },
      body: JSON.stringify(payload)
    })
    .then(res => res.json())
    .then((json: SessionResponse) => {
      const sessionId = json.data.sessionId;
      localStorage.setItem('chatSessionId', sessionId);
      return sessionId;
    });
  }

  /**
   * Devuelve un Observable que emite fragmentos de mensaje del asistente a medida que llegan
   */
  streamMessages(message: string, chatHistory: ChatEntry[]): Observable<string> {
    const sessionId = localStorage.getItem('chatSessionId');
    const body = JSON.stringify({ message, sessionId, chat_history: chatHistory });
    const headers = { 'Content-Type': 'application/json', 'apikey': this.apiKey };

    return new Observable(observer => {
      fetch(this.chatUrl, {
        method: 'POST',
        headers,
        body
      })
      .then(res => {
        if (!res.body) throw new Error('No response body');
        const reader = res.body.getReader();
        const decoder = new TextDecoder('utf-8');
        let buffer = '';

        const read = (): void => {
          reader.read().then(({ done, value }) => {
            if (done) {
              observer.complete();
              return;
            }
            buffer += decoder.decode(value, { stream: true });
            const lines = buffer.split('\n');
            buffer = lines.pop()!;

            for (const line of lines) {
              if (line.startsWith('data: ')) {
                try {
                  const json = JSON.parse(line.slice(6));
                  if (json.t === 'msg' || json.t === 'chunk') {
                    observer.next(json.v);
                  }
                } catch {
                  // ignorar líneas no JSON
                }
              }
            }
            read();
          }).catch(err => observer.error(err));
        };

        read();
      })
      .catch(err => observer.error(err));
    });
  }
}
