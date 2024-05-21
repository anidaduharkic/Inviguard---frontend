import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Injectable} from "@angular/core";
import {SuggestionFactDto} from "../models/suggestion-dto.interface";
import {SuggestionFact} from "../models/suggestion.interface";


@Injectable()
export class ApiService {

  private url: string = 'https://www.boredapi.com/api/activity'

  constructor(private http: HttpClient) {

  }
  public getSuggestion(): Observable<Object> {
  return this.http.get<Object>(this.url);
}
}


