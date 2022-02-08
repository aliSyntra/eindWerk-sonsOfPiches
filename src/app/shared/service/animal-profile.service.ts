import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable, tap} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AnimalProfileService {

  url:string = "";
  constructor(private http: HttpClient) {
    this.url = "http://sonsofkittens.be/api/useranimals/";
  }

  getUseranimal(animalId): Observable<any[]> {
    return this.http.get<any[]>(this.url + animalId)
      .pipe(
        tap(result => console.log("Animal fetch: ", result))
      );
  }
}
