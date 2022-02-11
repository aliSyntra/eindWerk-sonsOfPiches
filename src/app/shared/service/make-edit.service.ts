import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MakeEditService {
  addAnimal(newMakeAnimalObj) {

    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json'},
      body: JSON.stringify(newMakeAnimalObj)
    };

    fetch('http://sonsofkittens.be/api/useranimals', requestOptions)
    .then(response => response.json())

  }
   

  constructor() { }
}
