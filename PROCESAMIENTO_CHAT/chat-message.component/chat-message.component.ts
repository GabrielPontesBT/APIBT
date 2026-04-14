import { Component, Input, ViewEncapsulation } from '@angular/core';
import { MarkdownComponent } from 'ngx-markdown';
import { EEventTypes, EMessageButtonType, EMessageType, IAttach, IMessage, IMessageButton } from '../../model';
import { CommonModule } from '@angular/common';
import { CONFIG } from '../../../../utils/config';
import { SvgsModule } from '../../../../components/svgs/svgs.module';
import { SpeechService } from '../../../../services/speech/speech.service';
import { KatexRenderDirective } from '../../../../directives/katex-render.directive';
import { DragScrollDirective } from "../../../../directives/drag-scroll.directive";
import { LoaderSpinnerComponent } from '../../../../components/loader/spinner/spinner.component';
import { ChatAttachsComponent } from '../chat-attachs/chat-attachs.component';
import { NgxFloatUiPlacements } from 'ngx-float-ui';
import { TranslateAgentPipe } from '../../../../pipes/translate-agent.pipe';
import { AccountingEntryPreviewComponent } from './accounting-entry-preview/accounting-entry-preview.component';

@Component({
  selector: 'app-chat-message',
  imports: [
    CommonModule,
    MarkdownComponent,
    SvgsModule,
    KatexRenderDirective,
    LoaderSpinnerComponent,
    ChatAttachsComponent,
    TranslateAgentPipe,
    AccountingEntryPreviewComponent
],
  templateUrl: './chat-message.component.html',
  styleUrl: './chat-message.component.scss',
  encapsulation: ViewEncapsulation.None
})
export class ChatMessageComponent {
  constructor(private speech: SpeechService) { }
  @Input() message?: IMessage;
  EMessageType = EMessageType;
  EEventTypes = EEventTypes;
  EMessageButtonType = EMessageButtonType;
  NgxFloatUiPlacements = NgxFloatUiPlacements;
  CONFIG = CONFIG;
  showModal: IMessageButton | undefined;

  async playMessage() {
    if (!!this.message?.message)
      await this.speech.speak(this.message.message)
  }
  downloadAttach(attach: IAttach){

  }
  clickButton(button: IMessageButton) {
    if (button.type === EMessageButtonType.ShowModal) {
      this.showModal = button;
    } else if (button.type === EMessageButtonType.OpenNewTab) {
      // TODO: implement open new tab
    }
  }
  closeModal() {
    this.showModal = undefined;
  }
}
