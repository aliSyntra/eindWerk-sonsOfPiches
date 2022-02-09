import { Component, OnInit } from '@angular/core';
import { MakeEditService } from '../shared/service/make-edit.service';


@Component({
  selector: 'app-make-edit',
  templateUrl: './make-edit.component.html',
  styleUrls: ['./make-edit.component.css']
})

export class MakeEditComponent implements OnInit {

  constructor(private makeEditserv: MakeEditService) {}

    ngOnInit(): void {
      
    }

    addAnimal(name,breed,date,weight,size) {
      console.log(name,breed,date,weight,size);
      // niew object maken vanm mijn input
        let newMakeAnimalObj = {
          name: name,
          breed: breed,
          date: date,
          weight: weight,
          size: size
      };
      // check
      console.log(newMakeAnimalObj);
      // stuur mijn object door naar mijn service voor verwerking API
      this.makeEditserv.addAnimal(newMakeAnimalObj);
  }
}

