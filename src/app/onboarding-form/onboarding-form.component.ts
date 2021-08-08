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
  section2 = false;
  section3 = false;
  section4 = false;
  section5 = false;
  
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
    if (form.valid) {
      this.authenticationCompleted=!this.authenticationCompleted;
      this.section2=!this.section2;
    } 
    console.log("after: " + this.authenticationCompleted);
    console.log("formValid: ", form.valid);
  }

  completeSection2(): void {
    this.section3=!this.section3;
  }
  completeSection3(): void {
    this.section4=!this.section4;
  }
  completeSection4(): void {
    this.section5=!this.section5;
  }
}
