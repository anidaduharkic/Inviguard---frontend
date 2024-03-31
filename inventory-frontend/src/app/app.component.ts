import { Component } from '@angular/core';
import {Form, FormBuilder, FormGroup, isFormGroup} from "@angular/forms";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})


export class AppComponent {
  title = 'Fancy title';

  form: FormGroup;

  constructor(formBuilder: FormBuilder) {
    this.form = formBuilder.group(
      {
        name:['Edin'],
        lastName:[],
        age: [],
        available:[true],
      }
    )
  }


  submitForm() {
    console.log(this.form.value);
    this.title = 'fancier';
  }
}
