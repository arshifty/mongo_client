import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddUserComponent } from './hero/add-user/add-user.component';
import { ViewComponent } from './hero/view/view.component';
import { HomeComponent } from './home/home.component';
import { VaiComponent } from './hero/vai/vai.component';
import { SelectallComponent } from './hero/selectall/selectall.component';
import {ShowComponent} from '../app/ashif/show/show.component'
import {ShowCustomerComponent} from '../app/ashif/show-customer/show-customer.component'
import { LoginComponent } from './login/login.component';
import { ReactiveFormTestComponent } from './reactive-form-test/reactive-form-test.component';


export const routes: Routes = [
  { 
    path: '', redirectTo: 'home', pathMatch: 'full' 
  },
  { 
    path: 'home', 
    component: HomeComponent 
  },
  { 
    path: 'add', 
    component: AddUserComponent 
  },
  { 
    path: 'display', 
    component: ViewComponent 
  },
  { 
    path: 'vai', 
    component: VaiComponent 
  },
  { 
    path: 'select', 
    component: SelectallComponent 
  },
  { 
    path: 'go', 
    component: ShowComponent 
  },

  { 
    path: 'showCustomer', 
    component: ShowCustomerComponent 
  },
  { 
    path: 'login', 
    component: LoginComponent 
  },
  { 
    path: 'react', 
    component: ReactiveFormTestComponent 
  },



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
