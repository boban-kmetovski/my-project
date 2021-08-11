import { Component, OnInit } from '@angular/core';
import { NgForm, NgModel } from '@angular/forms';
import { AuthenticationData } from '../data/authentication';
import { DataService } from './data.service';


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

  emailTitle = "Please Enter a valid email address";
  phoneTitle = 'Please Enter a valid phone number "07# ###-###"';
  embgTitle = 'Please Enter a valid personal number "ddmmyyyxxxyyy"';

  invalidUser:boolean = false;
  loggedUser: string ="";
  companies: any[]=[];
  selectedCompany: string="";

  
  originalAuthenticationData: AuthenticationData = {
    email: "",
    phone: "",
    embg: "" 
  }

  authenticationData: AuthenticationData = {...this.originalAuthenticationData};

  constructor(private dataService: DataService) { }

  ngOnInit(): void {}

  onSubmit(form: NgForm, email: NgModel, phone: NgModel, embg: NgModel): void {

    if(email.invalid) {this.authenticationData.email=this.originalAuthenticationData.email}
    if(phone.invalid) {this.authenticationData.phone=this.originalAuthenticationData.phone}
    if(embg.invalid) {this.authenticationData.embg=this.originalAuthenticationData.embg}

    if (form.valid) {
      let loggedUser=this.dataService.getBorowerName(embg.value);
      if (loggedUser=="not found"){
        this.authenticationData.embg=this.originalAuthenticationData.embg;
        this.invalidUser=true;
      } else {
        this.authenticationCompleted=!this.authenticationCompleted;
        this.section2=!this.section2;
        this.loggedUser=loggedUser;
        this.companies=this.dataService.getCompaniesList(loggedUser);
      }
    } 

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
