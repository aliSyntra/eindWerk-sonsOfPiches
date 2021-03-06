import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { MainpageService } from "../shared/service/mainpage.service";

@Component({
  selector: 'app-mainpage',
  templateUrl: './mainpage.component.html',
  styleUrls: ['./mainpage.component.css']
})
export class MainpageComponent implements OnInit {
  useranimals$!: any[];
  userId:number = parseInt(localStorage.getItem("userId"))

  constructor(
    private mainpageService: MainpageService,
    private _router: Router
    ) {}

  ngOnInit() {
    let name = localStorage.getItem('pass');
    if (!name) {
      this._router.navigate(["login"]);
    }

    //get users animals
    this.mainpageService.getUseranimals(this.userId)
    .subscribe(useranimal => { 
      this.useranimals$ = useranimal;
      sessionStorage.setItem("userAnimalArray", JSON.stringify(useranimal));
    });
  }

  gotoAnimalProfile(animalId:number) {
    const stringId:string = animalId.toString();
    sessionStorage.setItem("requestedAnimal", stringId);
    this._router.navigate(["animalProfile"]);
  }

  //headerbuttons
  back(){
     this._router.navigate(["login"]);
    localStorage.setItem("pass","")
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
