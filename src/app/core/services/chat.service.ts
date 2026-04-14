import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

interface SessionResponse {
  data: { sessionId: string };
}

@Injectable({ providedIn: 'root' })
export class ChatService {
  private sessionUrl = 'https://bt-ia2.bantotal.com/aihub/api/agents/session';
  private chatUrl    = 'https://bt-ia2.bantotal.com/aihub/api/agents/APIBTV3';
  private apiKey     = 'fI5Th4x6KH71mLPCjlRQbHSvWowqgETy';

  constructor() {}

  iniciarSesion(): Promise<string> {
    const payload = { agent: 'APIBTV3', user: '1.1.1.1' };
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

  streamMessages(message: string): Observable<string> {
    const sessionId = localStorage.getItem('chatSessionId');
    const body = JSON.stringify({ message, sessionId });
    const headers: Record<string, string> = {
      'Content-Type': 'application/json',
      'apikey': this.apiKey
    };

    return new Observable(observer => {
      fetch(this.chatUrl, { method: 'POST', headers, body })
      .then(res => {
        console.log('[ChatService] status:', res.status, res.headers.get('content-type'));
        if (!res.ok) {
          res.text().then(t => console.error('[ChatService] body:', t));
          throw new Error(`HTTP ${res.status}`);
        }
        if (!res.body) throw new Error('No response body');

        const reader = res.body.getReader();
        const decoder = new TextDecoder('utf-8');
        let buffer = '';

        const read = (): void => {
          reader.read().then(({ done, value }) => {
            if (done) { observer.complete(); return; }
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
