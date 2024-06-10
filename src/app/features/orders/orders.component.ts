import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Subject } from "rxjs";
import { takeUntil } from "rxjs/operators";
import { OrdersApiService } from "../../services/orders-api.service";
import { OrderDto } from "../../models/order-dto.interface";
import { ItemsApiService } from "../../services/items-api.service";
import { ItemDto } from "../../models/item-dto.interface";

@Component({
    selector: 'app-orders',
    templateUrl: './orders.component.html',
    styleUrls: ['./orders.component.css'],
})
export class OrdersComponent implements OnInit, OnDestroy {

    unsubscribe$: Subject<void> = new Subject<void>();
    orders: OrderDto[] = [];
    order!: OrderDto;
    items: ItemDto[] = [];
    form: FormGroup;

    constructor(
        private ordersService: OrdersApiService,
        private itemsService: ItemsApiService,
        formBuilder: FormBuilder
    ) {
        this.form = formBuilder.group({
            userId: ['', Validators.required],
            itemId: ['', Validators.required],
            numberOrdered: ['', Validators.required]
        });
    }

    ngOnDestroy(): void {
        this.unsubscribe$.next();
        this.unsubscribe$.complete();
    }

    ngOnInit(): void {
        this.loadOrders();
        this.loadItems();
    }

    private loadOrders(): void {
        this.ordersService.getAllOrders()
            .pipe(takeUntil(this.unsubscribe$))
            .subscribe(orders => {
                this.orders = orders;
            });
    }

    private loadItems(): void {
        this.itemsService.getAllItems()
            .pipe(takeUntil(this.unsubscribe$))
            .subscribe(items => {
                this.items = items;
            });
    }

    getOneOrder(id: number): void {
        this.ordersService.getOrder(id)
            .pipe(takeUntil(this.unsubscribe$))
            .subscribe(order => {
                this.form.setValue({
                    userId: order.userId,
                    itemId: order.itemId,
                    numberOrdered: order.numberOrdered
                });
                this.order = order;
            });
    }

    deleteOrder(id: number): void {
        this.ordersService.deleteOrder(id)
            .pipe(takeUntil(this.unsubscribe$))
            .subscribe(() => {
                this.order = null!;
                this.loadOrders();
                this.form.reset();
            });
    }

    submitForm(): void {
        if (!this.form.valid) {
            alert('Please fill in all required fields.');
            return;
        }

        const newOrder: OrderDto = this.form.value;

        this.ordersService.createOrder(newOrder)
            .pipe(takeUntil(this.unsubscribe$))
            .subscribe({
                next: () => {
                    this.loadOrders();
                    this.loadItems();
                    this.form.reset();
                    alert('Order created successfully.');
                },
                error: (error) => {
                    console.error('Error creating order:', error);
                    alert('Error creating order: ' + error.message);
                }
            });
    }

    updateOrder(): void {
        if (this.form.valid && this.order) {
            this.ordersService.updateOrder(this.order.id, this.form.value)
                .pipe(takeUntil(this.unsubscribe$))
                .subscribe(() => {
                    this.loadOrders();
                    this.form.reset();
                    this.order = null!;
                });
        }
    }
}







