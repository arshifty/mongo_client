import { Component, OnInit } from '@angular/core';
import {  FormControl,  FormGroup,  Validators,  FormBuilder,} from "@angular/forms";
import { User } from '../../model/User';
import { UserServiceService } from '../../service/user-service.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css'],
})
export class ViewComponent implements OnInit {
  userValue: any=[]; 
  userData: any;
  submitted = true;
  showUser: boolean;
  

 

  constructor(private myservice: UserServiceService,    private route: ActivatedRoute,    private router: Router) { }

  ngOnInit(): void { 
    this.viewData();
   // this.editUser(this.route.snapshot.paramMap.get('id'));
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
  
  onClose() {
    this.showUser = false;    
  }

  updateUser()  {
    if ( this.registrationForm.value["password"] === this.registrationForm.value["confirmPassword"] ) {         
      this.myservice.update(this.userData.id, this.userData)
      .subscribe(
        response => {
          this.viewData();
          console.log(response);
          alert("Updated Successfully");
          this.showUser = true;  
        },
        error => {
          console.log(error);
        });
   } else {     
      alert(" Password Not Matched");      
     }    
  }

  editUser(id: any) {
    console.log(id);
    this.showUser = true;  
    this.myservice.get(id)
      .subscribe(
        data => {
          this.userData = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }

  viewData() {
      this.myservice.getAll().subscribe(
        data => {
          this.userValue = data;
          console.log(data);

          this.userValue.forEach(element => {
          });

        },
        error => {
          console.log(error);
        });
  }

  deleteUser(id: any ) {
    this.myservice.delete(id)
      .subscribe(
        response => {
          console.log(response);
          this.viewData();
          this.router.navigate(['/add']);
        },
        error => {
          console.log(error);
        });
  }  
}
