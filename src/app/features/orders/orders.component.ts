import {Component, OnDestroy, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {Observable, Subject, take, takeUntil} from "rxjs";
import { Routes } from '../../constants/routes';
import {OrdersApiService} from "../../services/orders-api.service";
import {OrderDto} from "../../models/order-dto.interface";


@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrl: './orders.component.css',
})


export class OrdersComponent implements OnInit, OnDestroy {

    protected readonly Routes = Routes;

    private Route: any | string;
  router: any;
  form: FormGroup;


  constructor(private service: OrdersApiService, formBuilder: FormBuilder) {
      this.form = formBuilder.group(
          {
              itemOrdered:[''],
              numberOrdered:[],
              orderedBy: ['']
          }
      );
  }

  unsubscribe$: Subject<void> = new Subject<void>();

  orders: OrderDto[] = [];
  order!: OrderDto;


  ngOnDestroy():void{
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }

  ngOnInit(): void{
    this.loadOrders();
  }

   private loadOrders(): void {
      this.service.getAllOrders()
          .pipe(takeUntil(this.unsubscribe$))
          .subscribe(orders => {
            this.orders = orders;
          });

    }

    getOneOrder(id: number): void {
    this.service.getOrder(id)
        .pipe(takeUntil(this.unsubscribe$))
        .subscribe(order => {
            this.form.setValue({
                itemOrdered: order.itemOrdered,
                numberOrdered: order.numberOrdered,
                orderedBy: order.orderedBy
            })
            this.order = order;
            this.form.reset();
        });
    }


    deleteOrder(id: number): void {
    this.service.deleteOrder(id)
        .pipe(takeUntil(this.unsubscribe$))
        .subscribe(() => {
          this.order = null!;
          this.loadOrders();
        });
  }

    submitForm(): void {
       this.service.createOrder(this.form.value)
           .pipe(takeUntil(this.unsubscribe$))
           .subscribe(() =>{
               this.loadOrders();
               this.form.reset();
           });
    }

    updateOrder() {
        this.service.updateOrder(this.order.id, this.form.value)
            .pipe(takeUntil(this.unsubscribe$))
            .subscribe(() => {
                this.loadOrders();
                this.form.reset();
                this.order = null!;
            });
    }
}
