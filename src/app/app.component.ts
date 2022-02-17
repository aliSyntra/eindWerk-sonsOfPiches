import { Component, OnInit } from '@angular/core';

import { MainpageComponent } from "./mainpage/mainpage.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Petchalk';

  useranimals$!: any[];

  ngOnInit(): void {
    this.useranimals$ = JSON.parse(sessionStorage.getItem("userAnimalArray"));
  }
}
