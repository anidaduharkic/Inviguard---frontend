import {Component, OnDestroy, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {ApiService} from "../services/api.service";
import {Observable, Subject, take, takeUntil} from "rxjs";
import {Routes} from "../constants/routes";
import {Router} from "@angular/router";
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {ItemsApiService} from "../services/items-api.service";
import {ItemDto} from "../models/item-dto.interface";

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

/* const ELEMENT_DATA: OrderElements[] = [
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
] */

// @ts-ignore
@Component({
  selector: 'app-inventory',
  templateUrl: './inventory.component.html',
  styleUrl: './inventory.component.css',
})


export class InventoryComponent implements OnInit, OnDestroy {

  /*displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  dataSource = ELEMENT_DATA;

  LowInStockColumns: string[] = ['position', 'name', 'weight'];
  dataSourceStock = LOW_DATA; */

  private Route: any | string;
  router: any;
  form: FormGroup;


  constructor(private service: ItemsApiService, formBuilder: FormBuilder) {
      this.form = formBuilder.group(
          {
              itemName:[''],
              leftInStock:[],
          }
      );
  }

  unsubscribe$: Subject<void> = new Subject<void>();
  items: ItemDto[] = [];
  item!: ItemDto;



  ngOnDestroy():void{
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }

  ngOnInit(): void{
    this.loadItems();
  }

   private loadItems(): void {
      this.service.getAllItems()
          .pipe(takeUntil(this.unsubscribe$))
          .subscribe(items => {
            this.items = items;
          });

    }

    getOneItem(id: number): void {
    this.service.getItem(id)
        .pipe(takeUntil(this.unsubscribe$))
        .subscribe(item => {
            this.form.setValue({
                itemName: item.itemName,
                leftInStock: item.leftInStock,
            })
            this.item = item;
      });
    }


    deleteItem(id: number): void {
    this.service.deleteItem(id)
        .pipe(takeUntil(this.unsubscribe$))
        .subscribe(() => {
          this.item = null!;
          this.loadItems();
        });
  }



    submitForm(): void {
       this.service.createItem(this.form.value)
           .pipe(takeUntil(this.unsubscribe$))
           .subscribe(() =>{
               this.loadItems();
           });
    }

    updateItem() {
        this.service.updateItem(this.item.id, this.form.value)
            .pipe(takeUntil(this.unsubscribe$))
            .subscribe(() => {
                this.loadItems();
            });
    }
}
