import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EditService {
  editAnimal(newEditAnimalObj: { name: any; weight: any; size: any; chipnumber: any; insurance: any; }) {
    throw new Error('Method not implemented.');
  }

  constructor() { }
}
