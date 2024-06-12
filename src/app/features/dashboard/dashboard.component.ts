import { Component } from '@angular/core';
import {ItemDto} from "../../models/item-dto.interface";
import {ItemsApiService} from "../../services/items-api.service";
import {OrderDto} from "../../models/order-dto.interface";
import {OrdersApiService} from "../../services/orders-api.service";



// @ts-ignore
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css',
})


export class DashboardComponent {

  lowStockItems: ItemDto[] = [];
  orders: OrderDto[] = [];

  constructor(private itemsApiService: ItemsApiService, private ordersApiService: OrdersApiService) {}

  ngOnInit(): void {
    this.fetchLowStockItems();
    this.getAllOrders();
  }

  fetchLowStockItems(): void {
    this.itemsApiService.getLowStockItems().subscribe(
        (items: ItemDto[]) => {
          this.lowStockItems = items;
        },
        (error: any) => {
          console.error('Failed to fetch low stock items:', error);
        }
    );
  }


   getAllOrders() {
    this.ordersApiService.getAllOrders().subscribe(
        (orders: OrderDto[]) => {
          this.orders = orders;
        },
    (error: any) => {
       console.error('Failed to fetch orders', error);
     }
    )
  }

}
