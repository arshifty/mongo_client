import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, FormBuilder, } from "@angular/forms";
import { UserServiceService } from '../../service/user-service.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-vai',
  templateUrl: './vai.component.html',
  styleUrls: ['./vai.component.css']
})
export class VaiComponent implements OnInit {
  submitted = false;

  constructor(private myservice: UserServiceService,
    private modalService: NgbModal
    ) { }

  ngOnInit(): void {
    this.createForm();
  }

  registrationForm = new FormGroup({
    userName: new FormControl("", Validators.required),
    val: new FormControl("", [Validators.required, Validators.pattern(/^-?(0|[1-9]\d*)?$/),]),
    city: new FormControl("", Validators.required),
    country: new FormControl("", Validators.required),
    code: new FormControl("", Validators.required),
  });

  get f() { return this.registrationForm.controls; }

  data: any = [];

  onSubmit() {
    if(this.eduForm.valid && this.registrationForm.valid) {
      this.data = {
        userName: this.registrationForm.value.userName,
        contact: this.registrationForm.value.val,
        city: this.registrationForm.value.city,
        country: this.registrationForm.value.country,
        code: this.registrationForm.value.code,
        class: this.eduForm.value.class,
        dof: this.eduForm.value.dof,
      }
      console.log(this.data);
    } else {
        
    }
  
  }


  eduForm: FormGroup;
  modalData:boolean = true;
  showModalData:Boolean;
  stop:boolean = true;
  content:any;

  private createForm() {
    this.eduForm = new FormGroup({
      class: new FormControl(''),
      dof: new FormControl('',)
    });
  }


  secondSubmit() {
    this.stop = false;
    this.modalData = false;
    this.showModalData = true;
    this.submittedData = false;
    console.log("data entered ",  this.eduForm.value);
  }

  
  openVerticallyCentered(content: any) {
    this.modalService.open(content, { centered: true });
  }

  submittedData: any = false;

  onSubmitRegistration() {
    this.submittedData = true;
   
  }

  onClose() {    
    this.submittedData = false;
  }



}
