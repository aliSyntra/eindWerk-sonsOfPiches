import { Component, OnInit } from '@angular/core';
import { MedicationService } from '../shared/service/medication.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-medication',
  templateUrl: './medication.component.html',
  styleUrls: ['./medication.component.css']
})
export class MedicationComponent implements OnInit {

  constructor(private mediserv:MedicationService,
    private _router: Router) { }

  ngOnInit(): void {
    let name = localStorage.getItem('pass');
    if (!name) {
      this._router.navigate(["login"]);
    }
 
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
    this._router.navigate(["animalProfile"]);
  }

  logout(){
    this._router.navigate(["login"]);
    localStorage.setItem("pass","")
    sessionStorage.removeItem("userAnimalArray")
  }
  make(){
    this._router.navigate(["makeEdit"]);
  }
}
