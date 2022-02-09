
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MedicationService {
  
  addMedication(newMedObj) {
   
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newMedObj)
  };

  fetch('http://sonsofkittens.be/api/medication', requestOptions)
      .then(response => response.json())
    
  }

  constructor() { }


}

