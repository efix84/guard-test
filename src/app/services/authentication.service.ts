import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs'
import { LoginResponse } from './callapi.service';
@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  user$: BehaviorSubject<LoginResponse|null>

  constructor() {
    const storedUser = localStorage.getItem('user')
    let user = null
    if(storedUser!==null){
      user = JSON.parse(storedUser)
    }
    this.user$ = new BehaviorSubject<LoginResponse|null>(user)
  }

  setUser(user: LoginResponse){
    localStorage.setItem('user', JSON.stringify(user))
    this.user$.next(user)
  }

  logout(){
    localStorage.removeItem('user')
    this.user$.next(null)
  }

}
