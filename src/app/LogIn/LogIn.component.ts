import { Component } from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {Router} from "@angular/router";
import {Routes} from "../constants/routes";

@Component({
  selector: 'app-login',
  templateUrl: './LogIn.component.html',
  styleUrl: './LogIn.component.css'
})


export class LogInComponent {

  form: FormGroup;

  constructor(formBuilder: FormBuilder, private router: Router) {
    this.form = formBuilder.group(
      {
        email: [],
        password: [],
      }
    )
  }

  submitForm() {
    console.log(this.form.value);
    this.router.navigate([Routes.sidebar]);
  }

}
