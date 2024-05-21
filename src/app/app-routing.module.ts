import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {RegisterComponent} from "./register/register.component";
import {SidebarComponent} from "./sidebar/sidebar.component";
import {LogInComponent} from "./LogIn/LogIn.component";
import {ProfileComponent} from "./ProfilePage/profile.component";
import {DashboardComponent} from "./Dashboard/dashboard.component";

const routes: Routes = [
  {
    path: 'register',
    component: RegisterComponent,
    children:
      [
        {  path:'sidebar',
          component: SidebarComponent
        }
      ]
  },

  {
    path: 'about',
    component: LogInComponent
  }
  ,
  {
    path: 'sidebar',
    component: SidebarComponent
  } ,

  {
    path: 'profile',
    component: ProfileComponent
  },

  {
    path: 'dashboard',
    component: DashboardComponent
  },

  {
    path: 'login',
    component: LogInComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
