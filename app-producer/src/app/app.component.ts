import { Component, Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AppService } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

@Injectable()
export class AppComponent {

  message = '';
  vm: any;

  constructor(private appService: AppService) { }

  onClick(data) {
    this.appService.postData(data).subscribe((res) => {
      console.log(res);
    });
  }

}
