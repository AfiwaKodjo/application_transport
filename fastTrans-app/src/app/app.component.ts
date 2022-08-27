import { Component, OnInit } from '@angular/core';
import { AuthentificationService } from './authentification.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'fastTrans-app';

  constructor(public authentificationService: AuthentificationService){

  }
}



  