import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { OrderDto } from '../models/order-dto.interface';

@Injectable({
  providedIn: 'root'
})
export class OrdersApiService {

  private readonly url: string = `${environment.backendUrl}/orders`;

  constructor(private http: HttpClient) {}

  getAllOrders(): Observable<OrderDto[]> {
    const token = localStorage.getItem("authToken");
    const headerDict = {
      'Authorization': "Bearer " + token
    }
    const requestOptions = {
      headers: new HttpHeaders(headerDict),
    };
    return this.http.get<OrderDto[]>(`${this.url}/list`, requestOptions);
  }

  getOrder(id: number): Observable<OrderDto> {
    const token = localStorage.getItem("authToken");
    const headerDict = {
      'Authorization': "Bearer " + token
    }
    const requestOptions = {
      headers: new HttpHeaders(headerDict),
    };
    return this.http.get<OrderDto>(`${this.url}/${id}`, requestOptions);
  }

  deleteOrder(id: number): Observable<void> {
    const token = localStorage.getItem("authToken");
    const headerDict = {
      'Authorization': "Bearer " + token
    }
    const requestOptions = {
      headers: new HttpHeaders(headerDict),
    };

    return this.http.delete<void>(`${this.url}/${id}`, requestOptions);
  }

  createOrder(order: OrderDto): Observable<OrderDto> {
    const token = localStorage.getItem("authToken");
    const headerDict = {
      'Authorization': "Bearer " + token
    }
    const requestOptions = {
      headers: new HttpHeaders(headerDict),
    };

    return this.http.post<OrderDto>(`${this.url}`, null, {
      ...requestOptions,
      params: {
        userId: order.user.id,
        itemId: order.item.id,
        numberOrdered: order.numberOrdered
      }
    });
  }

  updateOrder(id: number, order: OrderDto): Observable<OrderDto> {
    const token = localStorage.getItem('authToken');
    const headerDict = {
      'Authorization': 'Bearer ' + token
    };
    const requestOptions = {
      headers: new HttpHeaders(headerDict),
    };
    return this.http.put<OrderDto>(`${this.url}/${id}`, order, requestOptions);
  }

}


