import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { AnimalProfileService } from "../shared/service/animal-profile.service";
import { ChartDataset, ChartOptions } from 'chart.js';
/* import { Color, Label } from 'ng2-charts'; */

@Component({
  selector: 'app-animal-profile',
  templateUrl: './animal-profile.component.html',
  styleUrls: ['./animal-profile.component.css']
})
export class AnimalProfileComponent implements OnInit {
 
  constructor(private animalProfileService: AnimalProfileService,
    private _router: Router
    ){}
  useranimal$!: any;
  animalMed$!: any;

  ngOnInit(): void {
    let name = localStorage.getItem('pass');
    if (!name) {
      this._router.navigate(["login"]);
    }
    //get the animal id from the session storage
    const requestedAnimal:number = parseInt(sessionStorage.getItem("requestedAnimal"));
    
    //get animal data
    this.animalProfileService.getUseranimal(requestedAnimal)
    .subscribe(useranimal => this.useranimal$ = useranimal);

    //get medication data
    this.animalProfileService.getAnimalMed(requestedAnimal)
    .subscribe(animalMed => this.animalMed$ = animalMed);
  }
  // header knopjes
  back(){
    window.location.href="mainpage"
  }

  logout(){
    localStorage.setItem("pass","")
    window.location.href="login"
  }

  dropdown(){
    console.log("ikieki")
  }

  medication(){
    window.location.href="medication"
  }

  edit(){
    window.location.href="edit"
  }

  /* //linechart code
  public lineChartData: ChartDataset[] = [
    { data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A' },
  ];
  public lineChartLabels: Label[] = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
  public lineChartOptions: (ChartOptions & { annotation: any }) = {
    responsive: true,
  };
  public lineChartColors: Color[] = [
    {
      borderColor: 'black',
      backgroundColor: 'rgba(255,0,0,0.3)',
    },
  ];
  public lineChartLegend = true;
  public lineChartType = 'line';
  public lineChartPlugins = [];
  //Linechart END */
}
