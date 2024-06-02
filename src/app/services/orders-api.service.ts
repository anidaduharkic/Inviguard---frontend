import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Injectable} from "@angular/core";
import {environment} from "../../environments/environment";
import {OrderDto} from "../models/order-dto.interface";


@Injectable()
export class OrdersApiService {

  private readonly url: string = `${environment.backendUrl}/orders`;

  //private url: string = 'http://localhost:8080/orders';

  constructor(private http: HttpClient) {
  }

  public getAllOrders(): Observable<OrderDto[]> {
  return this.http.get<OrderDto[]>(this.url + '/list');
}

  public getOrder(id: number): Observable<OrderDto> {
    return this.http.get<OrderDto>(this.url + '/' + id);
  }

  public deleteOrder(id: number): Observable<void> {
    return this.http.delete<void>(this.url + '/' + id);
  }

  public createOrder(order: OrderDto): Observable<OrderDto> {
    return this.http.post<OrderDto>(this.url, order);
  }

  public updateOrder(id: number, order: OrderDto): Observable<OrderDto> {
    return this.http.put<OrderDto>(this.url + '/' + id, order);
  }

}

