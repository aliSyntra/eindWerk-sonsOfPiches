import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { Routes, RouterModule } from '@angular/router';
import { animate } from '@angular/animations';
import { FormsModule } from '@angular/forms';
import { ChartModule } from 'angular2-chartjs';

import { AppComponent } from './app.component';
import { RegisterComponent } from './register/register.component';
import { EditComponent } from './edit/edit.component';
import { AnimalProfileComponent } from './animal-profile/animal-profile.component';
import { LoginComponent } from './login/login.component';
import { MakeEditComponent } from './make-edit/make-edit.component';
import { MedicationComponent } from './medication/medication.component';
import { MainpageComponent } from './mainpage/mainpage.component';



const routes: Routes = [
  {path: "", redirectTo: 'login', pathMatch: 'full'},
  {path: "login", component: LoginComponent},
  {path: "mainpage", component: MainpageComponent},
  {path: "makeEdit", component: MakeEditComponent},
  {path: "animalProfile", component: AnimalProfileComponent},
  {path: "medication", component: MedicationComponent},
  {path: "register", component: RegisterComponent},
  {path: "edit/:id", component: EditComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    MainpageComponent,
    LoginComponent,
    MakeEditComponent,
    AnimalProfileComponent,
    MedicationComponent,
    RegisterComponent,
    EditComponent,
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
    ChartModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
