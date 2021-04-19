import { Component, OnInit } from '@angular/core';
import {  FormControl,  FormGroup,  Validators,  FormBuilder,} from "@angular/forms";

import { Store } from '@ngrx/store';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit  {
  title = 'angularmodal';
  constructor() {}

  ngOnInit() {
   
  }
}