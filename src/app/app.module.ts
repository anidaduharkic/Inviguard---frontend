import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {RegisterComponent} from "./register/register.component";
import {LogInComponent} from "./login/LogIn.component";
import {HeaderComponent} from "./header/header.component";
import {SidebarComponent} from "./sidebar/sidebar.component";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import {MatButtonModule} from "@angular/material/button";
import {MatTableModule} from "@angular/material/table";
import {MatIconModule} from "@angular/material/icon";
import {MatFormField, MatFormFieldModule} from "@angular/material/form-field";
import {ItemsApiService} from "./services/items-api.service";
import {MatListModule} from "@angular/material/list";
import {MatCardModule} from "@angular/material/card";
import {OrdersApiService} from "./services/orders-api.service";
import {ProfileComponent} from "./features/profile/profile.component";
import {DashboardComponent} from "./features/dashboard/dashboard.component";
import {InventoryComponent} from "./features/inventory/inventory.component";
import {OrdersComponent} from "./features/orders/orders.component";
import {AuthService} from "./services/auth.service";
import {UserService} from "./services/user-service";
import {MatInputModule} from "@angular/material/input";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {LandingComponent} from "./landing/landing.component";
import {MatTab, MatTabGroup, MatTabLink, MatTabNav, MatTabNavPanel} from "@angular/material/tabs";
import { RouterModule } from '@angular/router';
import {MatGridList, MatGridTile} from "@angular/material/grid-list";

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
    LandingComponent,
  ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        AppRoutingModule,
        FormsModule,
        ReactiveFormsModule,
        MatButtonModule,
        HttpClientModule,
        MatTableModule,
        MatIconModule,
        MatFormField,
        MatListModule,
        MatCardModule,
        MatInputModule,
        MatFormFieldModule,
        MatTabGroup,
        MatTab,
        MatTabNav,
        MatTabLink,
        MatTabNavPanel,
        MatGridList,
        MatGridTile,
    ],
  providers: [
    provideAnimationsAsync('noop'),
      ItemsApiService,
      OrdersApiService,
      AuthService,
      UserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
