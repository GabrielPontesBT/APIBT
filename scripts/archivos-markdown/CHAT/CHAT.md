---
title: 
breadcrumb: false
pageInfo: false
toc: false
contributors: false
editLink: false
lastUpdated: false
prev: false
next: false
comment: false
footer: false
---

<MyComponent />

<script setup>
import { defineComponent, h, ref, onMounted, nextTick, watch } from 'vue';
import { RemoteRunnable } from '@langchain/core/runnables/remote';

const MyComponent = defineComponent({
  setup() {
    var readCode = false;
    const inputMessage = ref('');
    const messages = ref([]);
    const loading = ref(false);
    const typingIndicator = ref(false);

    const chatHistory = ref([]);

    const inputRef = ref(null); // Referencia al cuadro de entrada

    // HISTORIAL DEL CHAT
    const clearChatHistory = () => {
      messages.value = [{ text: '¡Hola!, ¿En qué puedo ayudarte?', isUser: false }];
      chatHistory.value = [];
      localStorage.removeItem('messages');
      localStorage.removeItem('chatHistory');
    };

    // Cargar historial del chat desde localStorage
    const loadChatHistory = () => {
      const savedMessages = localStorage.getItem('messages');
      const savedChatHistory = localStorage.getItem('chatHistory');

      if (savedMessages) {
        messages.value = JSON.parse(savedMessages);
      } else {
        // Mensaje inicial si no hay historial
        messages.value = [{ text: '¡Hola!, ¿En qué puedo ayudarte?', isUser: false }];
      }

      if (savedChatHistory) {
        chatHistory.value = JSON.parse(savedChatHistory);
      }
    };

    // Guardar historial del chat en localStorage
    const saveChatHistory = () => {
      localStorage.setItem('messages', JSON.stringify(messages.value));
      localStorage.setItem('chatHistory', JSON.stringify(chatHistory.value));
    };

    onMounted(() => {
      loadChatHistory();

      // Observar cambios en los mensajes para el guardado automático
      watch(messages, saveChatHistory, { deep: true });
      watch(chatHistory, saveChatHistory, { deep: true });
    });
    // FIN - HISTORIAL DEL CHAT

    // BOTÓN PARA COPIAR EL CÓDIGO DE LOS EJEMPLOS XML Y JSON
    function copyCode(button) {
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
            button.textContent = "Copiado";
            button.style.color = "var(--text-color)"; 
            button.style.backgroundImage = "none";
            setTimeout(() => {
              button.textContent = "";
              button.style.color = ""; // Restaurá el color original
              button.style.backgroundImage = "var(--code-copy-icon)";
            }, 2000);
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
          button.textContent = "Copiado";
          button.style.color = "var(--text-color)";
          button.style.backgroundImage = "none";
          setTimeout(() => {
            button.textContent = "";
            button.style.color = "";
            button.style.backgroundImage = "var(--code-copy-icon)";
          }, 2000);
        } catch (err) {
          console.error("Fallback: Failed to copy text: ", err);
          alert("Failed to copy text. Please try again.");
        }
        document.body.removeChild(textarea);
      }
    }

    const sendMessage = async () => {
      const message = inputMessage.value.trim();

      if (message === '') return;

      messages.value.push({ text: message, isUser: true });
      chatHistory.value.push({ role: "user", content: message });
      inputMessage.value = '';

      const data = {
        input: message,
        chat_history: chatHistory.value
      };
      
      const remoteChain = new RemoteRunnable({
        url: 'https://btasistentes.azurewebsites.net/API_docs'
      });

      showLoader();

      try {
        typingIndicator.value = true;

        const logStream = await remoteChain.streamEvents(data, {
          version: "v1",
          configurable: {
            user_id: '',
            usuario: '',
            asistente: ''
          },
          metadata: {
          }
        });

        let fullMessage = "";
        chatHistory.value.push({ role: "assistant", content: message }); // Placeholder para el bot
        messages.value.push({ text: "", isUser: false });
        const lastMessageIndex = chatHistory.value.length - 1;

        for await (const chunk of logStream) {
          const processedContent = processChunk(chunk);
          if (processedContent) {
            fullMessage += chunkProcess(processedContent);
            const regex = /\n/; 
            if (regex.test(processedContent)){
              fullMessage = formatMessage(fullMessage);
            }

            // Actualiza el historial de chat y el mensaje en pantalla progresivamente
            chatHistory.value[lastMessageIndex].content = fullMessage;
            messages.value[messages.value.length - 1] = {
              text: fullMessage,
              isUser: false
            };

            // Llamar al autoscroll dinámico
            scrollToBottom();
          }
          
        }
      } catch (error) {
        console.error('Error:', error);
        messages.value.push({ text: 'Error en la solicitud.', isUser: false });
      } finally {
        typingIndicator.value = false;
        hideLoader();

        // Asegurar el enfoque del cuadro de entrada
        nextTick(() => {
          const inputElement = inputRef.value;
          if (inputElement) {
            inputElement.focus();
          } else {
            console.warn("inputRef no está disponible después de la respuesta.");
            setTimeout(() => {
              if (inputRef.value) {
                inputRef.value.focus();
              }
            }, 100); // Retraso adicional para garantizar el enfoque
          }
        });

        scrollToBottom();
      }
    };

    // Funciones auxiliares para procesar mensajes
    const processChunk = (chunk) => {
      if (chunk.event === 'on_chat_model_stream') {
        return chunk.data.chunk.content;
      }
      return '';
    };

    const chunkProcess = (text) => {
      if (readCode){
        return text
          .replace(/</g, '&lt;')
          .replace(/>/g, '&gt;')
          .replace(/\|\|/g, '<br>')
          .replace(/\t/g, '&nbsp;&nbsp;&nbsp;&nbsp;');
      }
      else {
        return text
          .replace(/</g, '<')
          .replace(/>/g, '>')
          .replace(/\|\|/g, '<br>')
          .replace(/\t/g, '&nbsp;&nbsp;&nbsp;&nbsp;');

      }
    };

    const formatMessage = (message) => {
      // Procesar JSON
      let formattedMessage = message;
      
      if (!readCode) {
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
      formattedMessage = formattedMessage.replace(/((```json)|(<div class="json-code"><code>))([\s\S]+?)/g, (match, p1, p2, p3, p4) => {
        const escapedContent = p4
          .replace(/&/g, '&') // Escapar `&`
          .replace(/</g, '<') // Escapar `<`
          .replace(/>/g, '>'); // Escapar `<`
        return `<div class="json-code"><code>${escapedContent}`;
      });

      var regex = /```xml/; 
      if (regex.test(formattedMessage)){
          console.log("leo xml")
          readCode = true
      }

      // Procesar XML
      formattedMessage = formattedMessage.replace(/```xml/g, `<div class="xml-code"><code>`);
      
      regex = /```/; 
      if (regex.test(formattedMessage)){
          console.log("fin xml")
            
          formattedMessage = formattedMessage.replace(/```/g, `</code><button class="copy-button" onclick="copyCode(this)" style="background-image: var(--code-copy-icon);" title="Copiar código"></button></div>`)
          
          readCode = false
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
      formattedMessage = formattedMessage.replace(/(?<!title)(?<!style)(?<!class)(?<!onclick)(?<!<span class="token string">)([:=]\s*?)"([^"]+)"(?<!<\/span>)/g, (match, p1, p2) => {
        return `<span class="token string">${p1}"${p2}"</span>`;
      });
      

      return formattedMessage;
    };

    const showLoader = () => {
      loading.value = true;
    };

    const hideLoader = () => {
      loading.value = false;
    };

    const scrollToBottom = () => {
      const container = document.querySelector('.chat-messages');
      if (container) container.scrollTop = container.scrollHeight;
    };

    onMounted(() => {
      window.copyCode = copyCode;
      const observer = new MutationObserver(scrollToBottom);
      const container = document.querySelector('.chat-messages');
      observer.observe(container, { childList: true });

      // Enfocar el cuadro de entrada al cargar la página
      nextTick(() => {
        if (inputRef.value) {
          inputRef.value.focus();
        } else {
          console.warn("inputRef no está disponible en onMounted.");
        }
      });
    });

    return () => [
      h('div', { class: 'chat-container' }, [
        h('button', { onClick: clearChatHistory, class: 'clear-history-button', title:"Borrar el historial actual de la conversación" }, " "),
        h('div', { class: 'chat-messages' }, 
          messages.value.map((message, index) =>
            h('div', { class: ['message', message.isUser ? 'user-message' : 'bot-message'], key: index }, [
              h('div', { innerHTML: message.text })
            ])
          ).concat(
          )
        ),
        h('div', { class: 'chat-input' }, [
          h('input', {
            ref: inputRef, // Referencia para el enfoque
            value: inputMessage.value,
            onInput: (e) => inputMessage.value = e.target.value,
            onKeydown: (e) => { if (e.key === 'Enter') sendMessage(); },
            placeholder: 'Escribe un mensaje...',
            disabled: loading.value
          }),
          h('button', { onClick: sendMessage, disabled: loading.value }, 'Enviar')
        ]),
        h('div', { id: 'loader', class: loading.value ? 'loading' : '' }, 'Loading...')
      ])
    ];
  }
});
</script>

<style>
.clear-history-button {
  position: absolute; /* Posiciona el botón en relación al contenedor */
  top: 10px; /* Espaciado desde la parte superior del contenedor */
  right: 15px; /* Espaciado desde la parte derecha del contenedor */
  z-index: 10;
  border: none;
  background-image: url("/assets/image/borrar-historial-negro.png");
  background-repeat: no-repeat; /* Evita que la imagen se repita */
  background-size: contain; /* Ajusta la imagen para que encaje dentro del botón */
  background-position: center; /* Centra la imagen */
  background-color: rgb(198, 198, 198); /* Color de fondo como respaldo */
  color: white;
  border-radius: 4rem;
  cursor: pointer;
  padding: 12px 25px;
}

.clear-history-button:hover {
  background-color: var(--theme-color-mask);
}

.clear-history-button:disabled {
  background-color: #cccccc;
  cursor: not-allowed;
}

.chat-container {
  position: relative;
  display: flex;
  flex-direction: column;
  height: 75vh;
  max-height: calc(100% - 2rem); /* Para mantener la responsividad */
  margin: 2rem auto; /* Márgenes superior e inferior iguales, centrado horizontalmente */
  border-radius: 1rem;
  overflow: hidden;
  background-color: var(--warning-bg-color);
  box-shadow: 15px 15px 15px 10px var(--card-shadow);
}

.chat-messages {
  flex: 3; /*ANTES ERA 1*/
  padding: 2rem; /*ANTES ERA 1*/
  overflow-y: auto;
  background-color: var(--bg-note-color);
}

.message {
  margin-bottom: 0.8rem;
}

.user-message {
  display: flex; /*NUEVO*/
  justify-content: end; /*NUEVO*/
  align-items: end; /*NUEVO*/
  /*background-color: #C3261F;
  color: white;*/  

  background-color: #edd6d7;
  color: #C3261F;

  align-self: flex-end;
  padding: 1rem;
  margin-bottom: 1rem;

  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  border-bottom-right-radius: 0px;
  border-bottom-left-radius: 20px;

  float: right;       
  clear: both;       
  width: fit-content;
}

.bot-message {
  background-color: var(--bg-color-secondary);
  color: var(--text-color);
  align-self: flex-start;
  padding: 1rem;
  margin-bottom: 1rem;

  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  border-bottom-right-radius: 20px;
  border-bottom-left-radius: 0px;

  float: left;       
  clear: both;       
  width: fit-content;
  line-height: 1.5; /* Ajustá el valor según lo necesites */
}

.chat-input {
  display: flex;
  padding: 1rem;
  /*border-top: 1px solid #ccc;*/
  background-color: var(--warning-bg-color);
}

.chat-input input {
  flex: 1;
  padding: 1rem;
  border: 1px solid var(--bg-color-secondary);
  border-radius: 1rem;
  outline: none;
  background-color: var(--bg-color-secondary);
  font-size: 1rem;
}

.chat-input input:disabled {
  background-color: #f7f7f7;
}

.chat-input button {
  padding: 10px 20px;
  margin-left: 10px;
  border: none;
  background-color: #C3261F;
  color: white;
  border-radius: 1rem;
  cursor: pointer;
  font-size: 1rem;
}

.chat-input button:hover {
  background-color: #ac1012;
}

.chat-input button:disabled {
  background-color: #cccccc;
  cursor: not-allowed;
}

.typing-indicator {
  display: flex;
    /* justify-content: center;
    align-items: center; */
  color: #555;
  font-style: italic;
  /*  font-size: 24px;*/
}

.typing-indicator .dot {
  animation: typing 1.5s infinite;
  /*font-size: 24px;*/
}

.typing-indicator .dot:nth-child(1) {
  animation-delay: 0s;
}

.typing-indicator .dot:nth-child(2) {
  animation-delay: 0.3s;
}

.typing-indicator .dot:nth-child(3) {
  animation-delay: 0.6s;
}

@keyframes typing {
  0% { opacity: 0; }
  50% { opacity: 1; }
  100% { opacity: 0; }
}

#loader {
  display: none;
  text-align: center;
  margin-top: 10px;
}

.loading {
  display: block;
}

.xml-code,
.json-code {
  position: relative;
  white-space: pre-wrap;
  background-color: var(--code-bg-color);
  color:var(--code-color);
  padding: 10px;
  border-radius: 1rem;
  font-family: monospace;
  border: 1px solid #ccc;
  margin: 1rem 0 1rem 0;
  display: block;
  overflow-x: auto;
  word-wrap: break-word;
  line-height: 1.2; /* Ajustá el valor según lo necesites */
}

code {
  background: none;
}

.xml-code,
.json-code code {
  display: block;
  white-space: pre-wrap;
}

.copy-button {
  position: absolute;
  top: 10px;
  right: 10px;
  padding: 5px 10px;
  min-width: 2em;  
  min-height: 2em;
  background-color: var(--code-bg-color);
  color: #003f7f;
  border: none;
  border-radius: 3px;
  cursor: pointer;
  font-size: 0.9rem;
  /*background-image: var(--code-copy-icon);*/
  background-repeat: no-repeat; /* Evita que la imagen se repita */
  background-position: center; /* Centra la imagen dentro del contenedor */
}

.copy-button:hover {
  background-color: var(--code-hl-bg-color);
}

.copy-button:active {
  background-color: #003f7f;
}

</style>
