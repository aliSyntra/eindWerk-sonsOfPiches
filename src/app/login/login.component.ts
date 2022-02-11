import { Component, OnInit } from '@angular/core';
import * as CryptoJS from 'crypto-js';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  email!: string;
  password!: string;
  encryptPass: any;
  apiUrl: string = 'http://sonsofkittens.be/api/users';
  login() {

    // HASH the password of our input form
    this.encryptPass = CryptoJS.MD5(this.password.toString())
    // Fetch the user from our db with the api (create a SEARCH endpoint lumen)
    fetch(this.apiUrl + '/login/' + this.email).then(res => res.json()).then(
      res => {
        // check if email exists... else error (lenght of the returned array)
        if (res.length == 0) {
          alert('wrong username or password');
        } else {
          // check if our hashed input equals the hashed input from our DB
          if (res[0].password == this.encryptPass) {
            // yay, it does.. true, so initiate authentication with sessionStorage
            localStorage.setItem('pass', this.encryptPass);
            // alert('login success');
            // redirectTo: 'mainpage'
            this._router.navigate(["mainpage"]);
            //redirect to dashboard (in the ngOninit dashboard component check session else redirect to login)
          } else {
            alert('wrong username or password');
            // toast...
          }
        }})
  }
  signup(){
    this._router.navigate(["register"]);
  }
  constructor( private _router: Router) { }

  ngOnInit(): void {
  }

}