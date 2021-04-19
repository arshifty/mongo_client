import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UserServiceService } from '../service/user-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  
  constructor(private myservice: UserServiceService,   
     private route: ActivatedRoute,    private router: Router) { }


  ngOnInit(): void {
    this.createDetailForm();
  }

  private createDetailForm() {
    this.loginForm = new FormGroup({
      email: new FormControl('aaa@gmail.com', [Validators.required]),
      password: new FormControl('', Validators.required)
    });
  }

  onSubmit(){
    // console.log(this.loginForm.value);
    this.myservice.userLOgin(this.loginForm.value)
    .subscribe(
      response => {       
      },
      error => {
        console.log(error);
      });;
  }

}
