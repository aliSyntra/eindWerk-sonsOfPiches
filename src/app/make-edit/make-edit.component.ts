import { Component, OnInit } from '@angular/core';
import { MakeEditService } from '../shared/service/make-edit.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-make-edit',
  templateUrl: './make-edit.component.html',
  styleUrls: ['./make-edit.component.css']
})

export class MakeEditComponent implements OnInit {

  constructor(
    private makeEditserv: MakeEditService,
    private _router: Router
    ) {}

    ngOnInit() {
      let name = localStorage.getItem('pass');
    if (!name) {
      this._router.navigate(["login"]);
    }}

    addAnimal(name,genre,breed,date,weight,size,chipnumber,insurance) {
      console.log(name,genre,breed,date,weight,size,chipnumber,insurance);
      // niew object maken vanm mijn input
        let newMakeAnimalObj = {
          animal_id: 1,
          name: name,
          gender: 'male',
          birthday: date,
          weight: weight,
          size: size,
          breed_id: breed,
          user_id: 1,
          chip: 25435,
          insurance: 323443
          
          
      };
      // check
      console.log(newMakeAnimalObj);
      // stuur mijn object door naar mijn service voor verwerking API
      this.makeEditserv.addAnimal(newMakeAnimalObj);
  }
  //header buttons
  dropdown(){
    console.log("ikieki")
  }
  back(){
     this._router.navigate(["mainpage"]);
  }

  logout(){
    localStorage.setItem("pass","")
     this._router.navigate(["login"]);
  }
}

