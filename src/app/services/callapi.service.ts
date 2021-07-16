import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export interface User {
  _id?: string,
  vorname?: string,
  nachname?: string,
  email: string,
  password: string
}

export interface LoginResponse {
  id: string
  vorname: string
  nachname: string
  email: string
}

@Injectable({
  providedIn: 'root'
})
export class CallapiService {

  constructor(private http: HttpClient) { }

  insertUser(user: User){
    return this.http.post('http://localhost:3000/users/input', user)
  }

  checkUser(user: User){
    return this.http.post<LoginResponse>('http://localhost:3000/users/checkuser', user)
  }

}
