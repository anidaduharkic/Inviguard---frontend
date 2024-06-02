import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {RegisterComponent} from "./register/register.component";
import {LogInComponent} from "./LogIn/LogIn.component";
import {HeaderComponent} from "./header/header.component";
import {SidebarComponent} from "./sidebar/sidebar.component";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import {MatButtonModule} from "@angular/material/button";
import {MatTableModule} from "@angular/material/table";
import {MatIconModule} from "@angular/material/icon";
import {MatFormField} from "@angular/material/form-field";
import {ApiService} from "./services/api.service";
import {ItemsApiService} from "./services/items-api.service";
import {MatListModule} from "@angular/material/list";
import {MatCardModule} from "@angular/material/card";
import {OrdersApiService} from "./services/orders-api.service";
import {ProfileComponent} from "./features/ProfilePage/profile.component";
import {DashboardComponent} from "./features/Dashboard/dashboard.component";
import {InventoryComponent} from "./features/Inventory/inventory.component";
import {OrdersComponent} from "./features/orders/orders.component";

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LogInComponent,
    HeaderComponent,
    SidebarComponent,
    ProfileComponent,
    DashboardComponent,
    InventoryComponent,
      OrdersComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    HttpClientModule,
    MatTableModule,
    MatIconModule,
    MatFormField,
    MatListModule,
    MatCardModule
  ],
  providers: [
    provideAnimationsAsync('noop'),
    ApiService,
    ItemsApiService,
      OrdersApiService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
