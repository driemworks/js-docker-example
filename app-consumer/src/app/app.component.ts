import { Component, OnInit } from '@angular/core';
import { AppService } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  messages;

  constructor(private appService: AppService) {}

  onClick() {
    this.appService.retrieveMessage().subscribe((result) => {
      console.log(result);
      this.messages = result;
    });
  }

}
