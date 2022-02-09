import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-make-edit',
  templateUrl: './make-edit.component.html',
  styleUrls: ['./make-edit.component.css']
})
export class MakeEditComponent implements OnInit {
  dropdown(){
    console.log("ikieki")
  }
  back(){
    window.location.href="mainpage"
  }

  logout(){
    window.location.href="login"
  }
 
  constructor() { }

  ngOnInit(): void {
  }

}
