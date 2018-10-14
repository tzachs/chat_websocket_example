import { Component } from '@angular/core';
import { ChatService } from './chat.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'chat';

	constructor (
		private chatService: ChatService
	) {
		this.chatService.messages.subscribe( msg => {
			console.debug(msg);
			console.log("Response: " + msg.message);
		})
	}

	private message = {
		author: 'author1',
		message: 'message1'
	}
	
	sendMsg() {
		this.chatService.messages.next(this.message);
	}
		
}
