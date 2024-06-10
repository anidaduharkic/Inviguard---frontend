import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {RegisterComponent} from "./register/register.component";
import {SidebarComponent} from "./sidebar/sidebar.component";
import {LogInComponent} from "./login/LogIn.component";
import {ProfileComponent} from "./features/profilepage/profile.component";
import {DashboardComponent} from "./features/dashboard/dashboard.component";
import {InventoryComponent} from "./features/inventory/inventory.component";
import {OrdersComponent} from "./features/orders/orders.component";


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
  },

  {
    path: 'inventory',
    component: InventoryComponent
  },
  {
    path:'orders',
    component:OrdersComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
