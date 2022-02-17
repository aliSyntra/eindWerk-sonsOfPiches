import { Component, NgModule, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { ChartComponent } from 'angular2-chartjs';

import { AnimalProfileService } from "../shared/service/animal-profile.service";
import { Useranimal } from "../../app/shared/model/useranimal.model";

@Component({
  selector: 'app-animal-profile',
  templateUrl: './animal-profile.component.html',
  styleUrls: ['./animal-profile.component.css']
})

export class AnimalProfileComponent implements OnInit {
  @ViewChild(ChartComponent) chartComponent: ChartComponent;

  constructor(private animalProfileService: AnimalProfileService,
    private _router: Router
    ){}
  useranimal$!: any;
  animalMed$!: any;
  animalId$!: any;
  animalBMI$!: any;
  
  animalChartWeight = [25, 26, 26, 27, 26, 30, 31];
  animalChartHeight = [60, 61, 61, 62, 64, 68, 70];
  animalChartBMI = [];

  ngOnInit(): void {
    let name = localStorage.getItem('pass');
    if (!name) {
      this._router.navigate(["login"]);
    }
    //get the animal id from the session storage
    const requestedAnimal:number = parseInt(sessionStorage.getItem("requestedAnimal"));
    this.animalId$=requestedAnimal;
    //get animal data
    this.animalProfileService.getUseranimal(requestedAnimal)
    .subscribe(useranimal => {
      this.useranimal$ = useranimal;
      this.animalBMI$ = this.calcBMI(useranimal.size, useranimal.weight);
    });

    //get medication data
    this.animalProfileService.getAnimalMed(requestedAnimal)
    .subscribe(animalMed => this.animalMed$ = animalMed);
  }

  //header knopjes
  back(){
    this._router.navigate(["mainpage"]);
  }

  logout(){
    localStorage.setItem("pass","")
    this._router.navigate(["login"]);
    sessionStorage.removeItem("userAnimalArray")
  }

  dropdown(){
    console.log("ikieki")
  }

  medication(){
    this._router.navigate(["medication"]);
  }

  edit(id){
    window.location.href="edit/"+id;
  }
  //header knopjes END

  delete(number){
    //const number:number=this.animalId$
    console.log(number);
    this.animalProfileService.deleteUseranimal(number).subscribe();
    this._router.navigate(["mainpage"]);
   }

   
  //linechart code
  type = 'line';
  data = {
    labels: ["January", "February", "March", "April", "May", "June", "July"],
    datasets: [
      {
        label: "Gewicht (kg)",
        data: [25, 26, 26, 27, 26, 30, 31]
      }
    ]
  };
  options = {
    responsive: true,
    maintainAspectRatio: false
  };

  chartShowWeight() {
    this.data.datasets[0].data = this.animalChartHeight;
    this.data.datasets[0].label = "Gewicht (kg)";
    this.chartComponent.chart.update();
  }

  chartShowHeight() {
    this.data.datasets[0].data = this.animalChartWeight;
    this.data.datasets[0].label = "Hoogte (cm)";
    this.chartComponent.chart.update();
  }

  chartShowBMI() {
    for(var i = 0; i < this.animalChartHeight.length; i++) {
      let bmi:number = this.calcBMI(this.animalChartHeight[i], this.animalChartWeight[i])
      this.animalChartBMI.push(bmi);
    }
    this.data.datasets[0].label = "BMI";
    this.data.datasets[0].data = this.animalChartBMI;
    this.chartComponent.chart.update();
  }
  //Linechart END

  //bmi calculator
  calcBMI(height:number, weight:number) {
    let meter = height/100;
    let kwad = meter**2;
    let bmi = weight/kwad;
    return Math.round(bmi);
  }
}
