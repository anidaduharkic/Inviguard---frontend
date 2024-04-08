import { Component } from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {ApiService} from "../services/api.service";
import {Observable} from "rxjs";
import {Routes} from "../constants/routes";
import {Router} from "@angular/router";


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})


export class ProfileComponent {

  userProfile: any = {
    picture: '../../favicon.co',
    name: 'John',
    surname: 'Doe',
    about: 'Here goes the description of the person...'
  };

  private Route: any | string;
  router: any;
  constructor(private service: ApiService) {

  }
  getSuggestion() {
    const returnFromMethod: Observable<Object> = this.service.getSuggestion();
    returnFromMethod.subscribe(this.callback);
    console.log(returnFromMethod);
  }

  callback (item: any): void{
    console.log(item);
  }

  logout() :void {
    this.router.navigate(['sidebar']);
  }
}
