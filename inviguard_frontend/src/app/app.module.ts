import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {RegisterComponent} from "./register/register.component";
import {LogInComponent} from "./LogIn/LogIn.component";
import {HeaderComponent} from "./header/header.component";
import {SidebarComponent} from "./sidebar/sidebar.component";
import {ProfileComponent} from "./ProfilePage/profile.component";
import {DashboardComponent} from "./Dashboard/dashboard.component";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import {MatButtonModule} from "@angular/material/button";
import {MatTableModule} from "@angular/material/table";
import {MatIconModule} from "@angular/material/icon";
import {MatFormField} from "@angular/material/form-field";
import {ApiService} from "./services/api.service";

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LogInComponent,
    HeaderComponent,
    SidebarComponent,
    ProfileComponent,
    DashboardComponent
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
  ],
  providers: [
    provideAnimationsAsync('noop'),
    ApiService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
