import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Injectable} from "@angular/core";
import {ItemDto} from "../models/item-dto.interface";
import {environment} from "../../environments/environment";


@Injectable()
export class ItemsApiService {

  private readonly url: string = `${environment.backendUrl}/items`;

  //private url: string = 'http://localhost:8080/items';

  constructor(private http: HttpClient) {

  }

  public getAllItems(): Observable<ItemDto[]> {
  return this.http.get<ItemDto[]>(this.url + '/list');
}

  public getItem(id: number): Observable<ItemDto> {
    return this.http.get<ItemDto>(this.url + '/' + id);
  }

  public deleteItem(id: number): Observable<void> {
    return this.http.delete<void>(this.url + '/' + id);
  }

  public createItem(item: ItemDto): Observable<ItemDto> {
    return this.http.post<ItemDto>(this.url, item);
  }

  public updateItem(id: number, item: ItemDto): Observable<ItemDto> {
    return this.http.put<ItemDto>(this.url + '/' + id, item);
  }
}

