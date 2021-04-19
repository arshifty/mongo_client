import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
// import { ToastrService } from 'ngx-toastr';
import { Location } from '@angular/common';

@Component({
  selector: 'app-reactive-form-test',
  templateUrl: './reactive-form-test.component.html',
  styleUrls: ['./reactive-form-test.component.css']
})
export class ReactiveFormTestComponent implements OnInit {


  loginForm: FormGroup;
  submitted: boolean;
  waiting: boolean;

  constructor(
   // private toastr: ToastrService,
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    public location: Location

  ) { }


  ngOnInit(): void {
    this.createDetailForm();
  }

  private createDetailForm() {
    this.loginForm = this.fb.group(
      {
        email: new FormControl('', [Validators.required]),
        password: new FormControl('', Validators.required)
      }
    );
  }

  onSubmit() {
    this.submitted = true;
    if (this.loginForm.valid) {
      this.submitted = false;
      console.log(this.loginForm.value);

      // ///button disable option based of waiting for data from api
      // this.waiting = true;
      // this._paymentService.requestBalance(data).subscribe((result: any) => {
      // this.waiting = false;
      //   if (result.success) {
      //     this.toastr.success("Requested Amount Success.", "Success!");
      //     this.router.navigateByUrl(`/pages/payment/payout-request/${this.club_id}`);
      //   } else {
      //     this.toastr.error(result.message, "Failed!");
      //   }
      // })

    }
    else {
      console.log("invalid");
    }
  }

  test() {
      console.log("working");
  }

  personName: string;
  setName() {
    this.personName = 'Mahesh';
  }  

  sendData() {
    console.log('---sendData---');
    //Call Service to send data over HTTP
  }
  editPerson(id: number) {
    console.log('---editPerson---', id);
    //Call Service to send data over HTTP
  }  

 

}
