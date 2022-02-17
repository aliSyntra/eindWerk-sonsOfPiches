import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Petchalk';

  useranimals$!: any[];
  backgroundUrl: string;

  ngOnInit(): void {
    this.useranimals$ = JSON.parse(sessionStorage.getItem("userAnimalArray"));
  }
}
