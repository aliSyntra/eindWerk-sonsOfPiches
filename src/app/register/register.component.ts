import { Component, OnInit } from '@angular/core';
import * as CryptoJS from 'crypto-js';
import { Router } from '@angular/router';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  apiUrl: string = 'http://sonsofkittens.be/api/users';

  constructor(private _router: Router) { }

  ngOnInit(): void {
  }
  password!:string
  encryptPass:any

  makeUser(name:string,email:string,password:string) {
    fetch(this.apiUrl + '/login/' + email).then(res => res.json())
    .then(
      data => {
        if (data.length == 0) {
          // No e-mail found, so register the user
                //MAS: .toString() toevoegen... van wordarray naar string
              this.encryptPass= CryptoJS.MD5(password).toString();
              let newUser = { name: name, email: email, password: this.encryptPass};
              fetch("http://sonsofkittens.be/api/users",
              {
                  headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                  },
                  method: "POST",
                  body: JSON.stringify(newUser)
              })
              .then(function(res){ 
                console.log("result: ",res);
                // redirect naar dashboard bv....
                alert('thank you user registered');
                //MAS @Ali: Best router gebruiken hier...
                window.location.href = "login";
              })
              .catch(function(res){ console.log(res) })
        } else {
          alert('e-mail already registered')
        }
      })
      
        

   


  }



  login(){
    this._router.navigate(["login"]);
  }

}
