import { Component } from '@angular/core';
import { Routes } from '../constants/routes';

@Component({
    selector: 'app-landing',
    templateUrl: './landing.component.html',
    styleUrls: ['./landing.component.css']
})
export class LandingComponent
{
    protected readonly Routes = Routes;

}