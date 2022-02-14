import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AnimalProfileComponent } from 'src/app/animal-profile/animal-profile.component';

@Injectable({
  providedIn: 'root'
})
export class EditService {
  editAnimal(editAnimal){

    const requestOptions = {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json'},
      body: JSON.stringify(newEditAnimalObj)
    };

  //   updateAnimal(){
  //     const httpHeaders = new HttpHeaders();
  //     const vervangURL = 'http://sonsofkittens.be/api/animals/' + {id}; 

  //   }

  //   getMovieFromId(id: number); Observable<animal]>{
  //     return of(animal.find => AnimalProfileComponent.id == id));
  //   }

 }



  constructor() { }
}
function newEditAnimalObj(newEditAnimalObj: any) {
  throw new Error('Function not implemented.');
}

