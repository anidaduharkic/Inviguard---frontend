import {Component, OnDestroy, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {Observable, Subject, take, takeUntil} from "rxjs";
import {ItemsApiService} from "../../services/items-api.service";
import {ItemDto} from "../../models/item-dto.interface";


// @ts-ignore
@Component({
  selector: 'app-inventory',
  templateUrl: './inventory.component.html',
  styleUrl: './inventory.component.css',
})


export class InventoryComponent implements OnInit, OnDestroy {

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
          this.form.reset();
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
