import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  makeUser(name,email,password) {
    // console.log(name,email,password);
    let newUser = { name: name, email: email, password: password };

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
      // alert('register OK');
      // melding registration OK, redirect naar dashboard bv....
      window.location.href = "login"
    })
    .catch(function(res){ console.log(res) })


  }

}
