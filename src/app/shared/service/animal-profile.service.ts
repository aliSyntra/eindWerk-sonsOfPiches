import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable, tap} from "rxjs";

import { Useranimal } from "../model/useranimal.model";

@Injectable({
  providedIn: 'root'
})
export class AnimalProfileService {

  url:string = "";
  constructor(private http: HttpClient) {
    this.url = "http://sonsofkittens.be/api/";
  }

  getUseranimal(animalId): Observable<Useranimal> {
    return this.http.get<Useranimal>(this.url + "useranimals/" + animalId)
      .pipe(
        tap(result => console.log("Animal fetch: ", result))
      );
  }

  getAnimalMed(animalId) :Observable<any[]> {
    return this.http.get<any[]>(this.url + "medications/animal/" + animalId)
      .pipe(
        tap(result => console.log("Medication fetch: ", result))
      );
  }
  deleteUseranimal(animalId): Observable<any[]> {
    return this.http.delete<any[]>(this.url + "useranimals/" + animalId)
      .pipe(
    );
  }
}
