import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ModalModule } from 'ngx-bootstrap/modal';
import { ViewComponent } from './hero/view/view.component';
import { AddUserComponent } from './hero/add-user/add-user.component';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import { VaiComponent } from './hero/vai/vai.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { SelectallComponent } from './hero/selectall/selectall.component';

import { StoreModule } from '@ngrx/store';
import { UserServiceService } from '../../src/app/service/user-service.service';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { ShowComponent } from './ashif/show/show.component';
import { LoadingComponent } from './loading/loading.component';
import {LoadingService} from './loading/loading.service';
import { ShowCustomerComponent } from './ashif/show-customer/show-customer.component';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { LoginComponent } from './login/login.component';
import { ReactiveFormTestComponent } from './reactive-form-test/reactive-form-test.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {ToastrModule} from 'ngx-toastr';



@NgModule({
  declarations: [
    AppComponent,
    ViewComponent,
    AddUserComponent,
    HomeComponent,
    VaiComponent,
    SelectallComponent,
    ShowComponent,
    LoadingComponent,
    ShowCustomerComponent,
    LoginComponent,
    ReactiveFormTestComponent,
  
  ],
  imports: [
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    MatProgressSpinnerModule,
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    CommonModule,
    ModalModule,
    HttpClientModule,
    NgbModule,
    TooltipModule,
    StoreModule.forRoot({}, {})
  ],
  providers: [ LoadingService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
