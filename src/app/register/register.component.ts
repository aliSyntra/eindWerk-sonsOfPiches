import { Component, OnInit } from '@angular/core';
import * as CryptoJS from 'crypto-js';
import { Router } from '@angular/router';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
password!:string
encryptPass:any
  makeUser(name,email,password) {
    // console.log(name,email,password);
    //MAS: .toString() toevoegen... van wordarray naar string
    this.encryptPass= CryptoJS.MD5(this.password).toString();
    let newUser = { name: name, email: email, password: this.encryptPass};
    console.log(this.encryptPass);
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
      console.log(res) 
      alert('register OK');
      // melding registration OK, redirect naar dashboard bv....
      window.location.href = "login"
    })
    .catch(function(res){ console.log(res) })


  }

}
