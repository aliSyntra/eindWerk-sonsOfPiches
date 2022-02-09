import { Component, OnInit } from '@angular/core';

import { AnimalProfileService } from "../shared/service/animal-profile.service";

@Component({
  selector: 'app-animal-profile',
  templateUrl: './animal-profile.component.html',
  styleUrls: ['./animal-profile.component.css']
})
export class AnimalProfileComponent implements OnInit {
 
  constructor(private animalProfileService: AnimalProfileService) { }
  useranimal$!: any;

  ngOnInit(): void {
    //get the animal id from the session storage
    const requestedAnimal:number = parseInt(sessionStorage.getItem("requestedAnimal"));
    
    this.animalProfileService.getUseranimal(requestedAnimal)
   .subscribe(useranimal => this.useranimal$ = useranimal);
  }
  // header knopjes
  back(){
    window.location.href="mainpage"
  }

  logout(){
    window.location.href="login"
  }

  dropdown(){
    console.log("ikieki")
  }

  medication(){
    window.location.href="medication"
  }

  edit(){
    window.location.href="makeEdit"
  }
}
