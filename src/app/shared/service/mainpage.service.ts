import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable, tap} from "rxjs";

import { Useranimal } from "../../shared/model/useranimal.model";

@Injectable({
  providedIn: 'root'
})
export class MainpageService {

  //define base api url
  url:string = "";
  constructor(private http: HttpClient) {
    this.url = "http://sonsofkittens.be/api/useranimals";
  }

  getUseranimals(): Observable<Useranimal[]> {
    return this.http.get<Useranimal[]>(this.url)
      .pipe(
        tap(result => console.log("Useranimal fetch: ", result))
      );
  }
}
