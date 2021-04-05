import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddUserComponent } from './hero/add-user/add-user.component';
import { ViewComponent } from './hero/view/view.component';
import { HomeComponent } from './home/home.component';
import { VaiComponent } from './hero/vai/vai.component';
import { SelectallComponent } from './hero/selectall/selectall.component';

const routes: Routes = [
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
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
