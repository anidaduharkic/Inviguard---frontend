import { Component } from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {ApiService} from "../services/api.service";
import {Observable} from "rxjs";
import {Routes} from "../constants/routes";
import {Router} from "@angular/router";
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';

export interface OrderElements {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

export interface LowInStock{
  name:string;
  position: number;
  weight:number;
}

const ELEMENT_DATA: OrderElements[] = [
  {position: 1, name: 'Laptop', weight: 2, symbol: 'John Doe'},
  {position: 2, name: 'Smartphone', weight: 3, symbol: 'Jane Smith'},
  {position: 3, name: 'Headphones', weight: 4, symbol: 'David Johnson'},
  {position: 4, name: 'Backpack', weight: 5, symbol: 'Emily Brown'},
  {position: 5, name: 'Notebook', weight: 6, symbol: 'Michael Williams'},
  {position: 6, name: 'Water bottle', weight: 7, symbol: 'Sarah Jones'},
  {position: 7, name: 'Umbrella', weight: 8, symbol: 'Jane Smith'},
  {position: 8, name: 'Sunglasses', weight: 9, symbol: 'Emily Brown'},
  {position: 9, name: 'T-shirt', weight: 12, symbol: 'Michael Williams'},
  {position: 10, name: 'Jeans', weight: 20, symbol: 'David Johnson'},
];

const LOW_DATA: LowInStock[] = [
  {position: 1, name: 'Umbrella', weight: 0},
  {position: 2, name: 'Sunglasses', weight: 2},
  {position: 3, name: 'T-shirt', weight: 1},
  {position: 4, name: 'Jeans', weight: 3},
]

// @ts-ignore
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css',
})


export class DashboardComponent {
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  dataSource = ELEMENT_DATA;

  LowInStockColumns: string[] = ['position', 'name', 'weight'];
  dataSourceStock = LOW_DATA;

}
