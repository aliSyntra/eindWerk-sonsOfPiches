import { Component, OnInit } from '@angular/core';

import { MainpageService } from "../shared/service/mainpage.service";
import { Useranimal } from "../../app/shared/model/useranimal.model";

@Component({
  selector: 'app-mainpage',
  templateUrl: './mainpage.component.html',
  styleUrls: ['./mainpage.component.css']
})
export class MainpageComponent implements OnInit {
  useranimals$!: Useranimal[];

  constructor(private mainpageService: MainpageService) {}

  ngOnInit() {
   this.mainpageService.getUseranimals()
   .subscribe(useranimal => this.useranimals$ = useranimal);
  }

}
