import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EditService } from '../shared/service/edit.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
id:string;
currentAnimal: any = {}
  constructor(
    private editserv: EditService,
    private _router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    let name = localStorage.getItem('pass');
  if (!name) {
    this._router.navigate(["login"]);
  }
    this.id = this.route.snapshot.paramMap.get('id');
      console.log('id of current animal'+this.id);
      fetch('http://sonsofkittens.be/api/useranimals/'+this.id).then((data) => data.json()).then(
        result => this.currentAnimal = result
      );
  }

  editAnimal(id,name,weight,size,chipnumber,insurance){
    console.log(name,weight,size,chipnumber,insurance);
    // niew object maken vanm mijn input
    let newEditAnimalObj = {
      name: name,
      weight: weight,
      size: size,
      chip: chipnumber,
      insurance: insurance
    }
    // check
    console.log(newEditAnimalObj,id);
    
    fetch('http://sonsofkittens.be/api/useranimals/'+id, {
    method: 'PUT',
    headers: {
    'Accept': 'application/json, text/plain, */*',
    'Content-Type': 'application/json'
    },
    body: JSON.stringify(newEditAnimalObj)
    }).then(res => {
      res.json();
      alert('Update complete');
    }
      )}

  

  //header buttons
  dropdown(){
    console.log("ikieki")
  }
  back(){
     this._router.navigate(["animalProfile"]);
  }

  logout(){
    localStorage.setItem("pass","")
     this._router.navigate(["login"]);
  }

}
