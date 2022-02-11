import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EditService } from '../shared/service/edit.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  constructor(
    private editserv: EditService,
    private _router: Router
  ) { }

  ngOnInit() {
    let name = localStorage.getItem('pass');
  if (!name) {
    this._router.navigate(["login"]);
  }}

  editAnimal(name,weight,size,chipnumber,insurance){
    console.log(name,weight,size,chipnumber,insurance);
    // niew object maken vanm mijn input
    let newEditAnimalObj = {
      name: name,
      weight: weight,
      size: size,
      chipnumber: chipnumber,
      insurance: insurance
    }
    // check
    console.log(newEditAnimalObj);
    // stuur mijn object door naar mijn service voor verwerking API
    this.editserv.editAnimal(newEditAnimalObj);
  }

  //header buttons
  dropdown(){
    console.log("ikieki")
  }
  back(){
     this._router.navigate(["animalProfile"]);
  }

  logout(){
    localStorage.setItem("pass","")
     this._router.navigate(["login"]);
  }

}
