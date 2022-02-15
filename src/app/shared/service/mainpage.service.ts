import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable, tap} from "rxjs";

import { Useranimal } from "../../shared/model/useranimal.model";

@Injectable({
  providedIn: 'root'
})
export class MainpageService {
  //needed variables
  //userId:number = 1; //replace with dynamic id later

  //define base api url
  url:string = "";
  constructor(private http: HttpClient) {
    this.url = "http://sonsofkittens.be/api/thisusersanimals/";
  }

  getUseranimals(userId:number): Observable<any[]> {
    return this.http.get<any[]>(this.url + userId)
      .pipe(
        tap(result => console.log("Useranimal fetch: ", result))
      );
  }
}
