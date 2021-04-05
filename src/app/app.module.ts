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


@NgModule({
  declarations: [
    AppComponent,
    ViewComponent,
    AddUserComponent,
    HomeComponent,
    VaiComponent,
    SelectallComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    CommonModule,
    ModalModule,
    HttpClientModule,
    NgbModule,
    TooltipModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
