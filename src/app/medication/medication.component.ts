import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-medication',
  templateUrl: './medication.component.html',
  styleUrls: ['./medication.component.css']
})
export class MedicationComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  //headerbuttons
  back(){
    window.location.href="animalProfile"
  }

  logout(){
    window.location.href="login"
  }
  dropdown(){
    console.log("ikieki")
  }
  make(){
    window.location.href="makeEdit"
  }
}
