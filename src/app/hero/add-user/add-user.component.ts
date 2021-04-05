import { Component, OnInit } from '@angular/core';
import {  FormControl,  FormGroup,  Validators,  FormBuilder,} from "@angular/forms";
import { User } from '../../model/User';
import { UserServiceService } from '../../service/user-service.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {
  submittedData: any = false;
  displayData: any = true;
  submitted = false;
  matchedPassword : any;
  
  constructor(private myservice: UserServiceService) { }

  ngOnInit(): void {
  }

  onSubmitRegistration() {
    this.submittedData = true;
    this.displayData = false;
  }

  onClose() {
    this.displayData = true;
    this.submittedData = false;
  }

  registrationForm = new FormGroup({
    userName: new FormControl("", Validators.required),
    val: new FormControl("", [ Validators.required, Validators.pattern(/^-?(0|[1-9]\d*)?$/), ]),
    password: new FormControl("", Validators.required),
    confirmPassword: new FormControl("", Validators.required),
    city: new FormControl("", Validators.required),
    country: new FormControl("", Validators.required),
    code: new FormControl("", Validators.required),
  });

  get f() { return this.registrationForm.controls; }
  
  onSubmit() {
    this.submitted = true;   
    if (this.registrationForm.invalid) {
        return;
    }
    let data: User = {
      userName: this.registrationForm.value.userName,
      contact: this.registrationForm.value.val,
      password: this.registrationForm.value.password,
      city: this.registrationForm.value.city,
      country: this.registrationForm.value.country,
      code: this.registrationForm.value.code
    }   
    if ( this.registrationForm.value["password"] === this.registrationForm.value["confirmPassword"] ) {          
       this.myservice.create(data).subscribe(  response => {
          console.log(response);
          this.displayData = true;
          this.submittedData = false;
          this.submitted = false;
          this.registrationForm.reset();
        },
        error => {
          console.log(error);
        });
      alert(" Registration Successful "); 
      console.log(data); 
    } else {     
       alert(" Password Not Matched");      
      }         
  }

  onReset() {
        this.submitted = false;
        this.registrationForm.reset();
  }
}

