import { Component, OnInit } from '@angular/core';
import { MedicationService } from '../shared/service/medication.service';
@Component({
  selector: 'app-medication',
  templateUrl: './medication.component.html',
  styleUrls: ['./medication.component.css']
})
export class MedicationComponent implements OnInit {

  constructor(private mediserv:MedicationService ) { }

  ngOnInit(): void {

 
  }

  addMedication(name,startdate,einddatum,aantal,description) {
    console.log(name,startdate,einddatum,aantal,description);
    // niew object maken vanm mijn input
    let newMedObj = {
      name: name,
      startdate:startdate,
      einddatum:einddatum,
      aantal: aantal,
      description:description
    };
    // check
    console.log(newMedObj);
    // stuur mijn object door naar mijn service voor verwerking API
    this.mediserv.addMedication(newMedObj);

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
