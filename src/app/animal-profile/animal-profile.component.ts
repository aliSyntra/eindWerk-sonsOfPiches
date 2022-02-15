import { Component, NgModule, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

import { AnimalProfileService } from "../shared/service/animal-profile.service";

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
  animalId$!:any;
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
    .subscribe(useranimal => this.useranimal$ = useranimal);

    //get medication data
    this.animalProfileService.getAnimalMed(requestedAnimal)
    .subscribe(animalMed => this.animalMed$ = animalMed);
  }
  // header knopjes
  back(){
   this._router.navigate(["mainpage"]);
  }

  logout(){
    localStorage.setItem("pass","")
    this._router.navigate(["login"]);
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
        label: "My First dataset",
        data: [65, 59, 80, 81, 56, 55, 40]
      }
    ]
  };
  options = {
    responsive: true,
    maintainAspectRatio: false
  };
  //Linechart END
}
