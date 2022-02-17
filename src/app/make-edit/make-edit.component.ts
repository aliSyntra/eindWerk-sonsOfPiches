import { Component, OnInit } from '@angular/core';
import { MakeEditService } from '../shared/service/make-edit.service';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-make-edit',
  templateUrl: './make-edit.component.html',
  styleUrls: ['./make-edit.component.css']
})

export class MakeEditComponent implements OnInit {
id:string;
genreType:string;
  constructor(
    private makeEditserv: MakeEditService,
    private _router: Router,
    private route: ActivatedRoute
    ) {}

    ngOnInit() {
    let name = localStorage.getItem('pass');
    if (!name) {
      this._router.navigate(["login"]);
    }

  }

  selectGenre(genre) {
    if (genre == 1) {
      this.genreType = 'Cat';
      // hier moeten we ook de dropdown binnenhalen... met alle katten (dataset)
      // fetch een endpoint met type cats
    } else {
      this.genreType = 'Dog';
       // hier moeten we ook de dropdown binnenhalen... met alle honden (dataset)
       // fet een endpoint met type dogs
    }
  }

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
  back(){
     this._router.navigate(["mainpage"]);
  }

  logout(){
    localStorage.setItem("pass","")
     this._router.navigate(["login"]);
     sessionStorage.removeItem("userAnimalArray")
  }
}

