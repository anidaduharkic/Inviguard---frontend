import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Injectable} from "@angular/core";


@Injectable()
export class ApiService {

  private url: string = 'https://www.boredapi.com/api/activity'

  constructor(private http: HttpClient) {

  }
  public getSuggestion(): Observable<Object> {
  return this.http.get(this.url);
}
}


