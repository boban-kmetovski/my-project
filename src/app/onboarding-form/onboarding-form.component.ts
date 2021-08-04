import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthenticationData } from '../data/authentication';


@Component({
  selector: 'app-onboarding-form',
  templateUrl: './onboarding-form.component.html',
  styleUrls: ['./onboarding-form.component.css']
})
export class OnboardingFormComponent implements OnInit {

  authenticationCompleted = true;
  
  authenticationData: AuthenticationData = {
    email: "",
    phone: "",
    embg: "" 
  }


  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(form: NgForm): void {
    console.log("before: " + this.authenticationCompleted);
    this.authenticationCompleted=!this.authenticationCompleted;
    console.log("after: " + this.authenticationCompleted);
  }

}
