import { Component } from '@angular/core';
import { MessagesService } from '../../services/messages.service';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
})
export class MessagesComponent {

  constructor(public messageService: MessagesService) { }

}
