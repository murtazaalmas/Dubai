import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';
import { MessageService } from '../../services/message.service';

@Component({
  selector: 'app-message-popup',
  standalone: true,
  imports: [CommonModule],
  templateUrl: 'message-popup.component.html',
  styleUrls: ['message-popup.component.scss']
})
export class MessagePopupComponent {
  message$: Observable<string | null>;

  constructor(private messageService: MessageService) {
    this.message$ = this.messageService.message$;
  }
}
