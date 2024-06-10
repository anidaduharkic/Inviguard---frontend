import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable, of} from "rxjs";
import {environment} from "../../environments/environment";
import {UserModel} from "../models/user.model";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private readonly baseUrl: string = `${environment.backendUrl}/user`;
  constructor(private http: HttpClient) {

  }
  getProfile(): Observable<UserModel> {
    const token = localStorage.getItem("authToken")
    const headerDict = {
      'Authorization': "Bearer " + token
    }

    const requestOptions = {
      headers: new HttpHeaders(headerDict),
    };

    return this.http.get<UserModel>(`${this.baseUrl}/profile`, requestOptions)
  }

  getStudentProfile(id: number): Observable<UserModel> {
    const token = localStorage.getItem("authToken")
    const headerDict = {
      'Authorization': "Bearer " + token
    }

    const requestOptions = {
      headers: new HttpHeaders(headerDict),
    };

    return this.http.get<UserModel>(`${this.baseUrl}/profile/${id}`, requestOptions)
  }
}
