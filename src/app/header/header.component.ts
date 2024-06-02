import { Component } from '@angular/core';
import {Routes} from "../constants/routes";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})


export class HeaderComponent {
  protected readonly Routes = Routes;
}
