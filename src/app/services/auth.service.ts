import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable, of} from "rxjs";
import {LoginModel} from "../models/login.model";
import {RegisterModel} from "../models/register.model";
import {environment} from "../../environments/environment";
import {UserModel} from "../models/user.model";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private readonly baseUrl: string = `${environment.backendUrl}`;
  constructor(private http: HttpClient) { }
  login(loginData: LoginModel): Observable<UserModel>{
    return this.http.post<UserModel>(`${this.baseUrl}/auth/login`, loginData)
  }

  register(registerData: RegisterModel): Observable<any>{
    return this.http.post<UserModel>(`${this.baseUrl}/auth/register`, registerData)
  }
}
