import { Component } from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {Routes} from "../constants/routes";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})


export class HeaderComponent {
  protected readonly Routes = Routes;
}
