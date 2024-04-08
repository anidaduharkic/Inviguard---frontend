import { Component } from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {Router} from "@angular/router";
import {Routes} from '../constants/routes';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})

export class RegisterComponent {


  title = 'Fancy title';

  form: FormGroup;
  private Route: any | string;

  constructor(formBuilder: FormBuilder, private router: Router) {
    this.form = formBuilder.group(
      {
        name:[],
        lastName:[],
        email: [],
        password: [],
        available:[true],
      }
    )
  }

  submitForm() {
    console.log(this.form.value);
    this.router.navigate([Routes.sidebar]);
  }

}
