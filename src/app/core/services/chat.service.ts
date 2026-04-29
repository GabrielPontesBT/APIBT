import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { VersionService, VersionId } from './version.service';

interface SessionResponse {
  data: { sessionId: string };
}

interface AgentConfig {
  agentName: string;
  chatUrl: string;
}

const BASE_URL = 'https://aihub.bantotal.com/aihub/api/agents';

const AGENT_CONFIG: Record<VersionId, AgentConfig> = {
  'v2r2': { agentName: 'APIBTV2R2', chatUrl: `${BASE_URL}/APIBTV2R2` },
  'v2r3': { agentName: 'APIBTV2R3', chatUrl: `${BASE_URL}/APIBTV2R3` },
  'v3r1': { agentName: 'APIBTV3',   chatUrl: `${BASE_URL}/APIBTV3`   },
  'bpay': { agentName: 'APIBPAY',   chatUrl: `${BASE_URL}/APIBPAY`   },
};

@Injectable({ providedIn: 'root' })
export class ChatService {
  private sessionUrl = `${BASE_URL}/session`;
  private apiKey     = 'fI5Th4x6KH71mLPCjlRQbHSvWowqgETy';

  constructor(private versionService: VersionService) {}

  private getConfig(): AgentConfig {
    return AGENT_CONFIG[this.versionService.activeVersion];
  }

  private sessionKey(): string {
    return `chatSessionId-${this.versionService.activeVersion}`;
  }

  hasSession(): boolean {
    return !!localStorage.getItem(this.sessionKey());
  }

  clearSession(): void {
    localStorage.removeItem(this.sessionKey());
  }

  iniciarSesion(): Promise<string> {
    const { agentName } = this.getConfig();
    const payload = { agent: agentName, user: '1.1.1.1' };
    return fetch(this.sessionUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'apikey': this.apiKey
      },
      body: JSON.stringify(payload)
    })
    .then(res => res.json())
    .then((json: any) => {
      if (!json.success) throw new Error(json.msg?.message ?? 'Error al iniciar sesión');
      const sessionId = (json as SessionResponse).data.sessionId;
      localStorage.setItem(this.sessionKey(), sessionId);
      return sessionId;
    });
  }

  streamMessages(message: string): Observable<string> {
    const { chatUrl } = this.getConfig();
    const sessionId = localStorage.getItem(this.sessionKey());
    const body = JSON.stringify({ message, sessionId });
    const headers: Record<string, string> = {
      'Content-Type': 'application/json',
      'apikey': this.apiKey
    };

    return new Observable(observer => {
      fetch(chatUrl, { method: 'POST', headers, body })
      .then(res => {
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
              if (!line.trim()) continue;
              if (line.startsWith('data: ')) {
                try {
                  const json = JSON.parse(line.slice(6));
                  if (json.t === 'msg' || json.t === 'chunk') {
                    observer.next(json.v);
                  } else if (typeof json.text === 'string') {
                    observer.next(json.text);
                  } else if (typeof json.content === 'string') {
                    observer.next(json.content);
                  }
                } catch {
                  // ignorar líneas no JSON
                }
              } else if (!line.startsWith(':') && !line.startsWith('event:')) {
                try {
                  const json = JSON.parse(line);
                  if (typeof json.text === 'string') observer.next(json.text);
                  else if (typeof json.content === 'string') observer.next(json.content);
                  else if (typeof json.v === 'string') observer.next(json.v);
                } catch { /* no es JSON */ }
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
