import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }
  isLoggedIn= false;

  login(username, password) {
    if(username ==="test@gmail.com" && password =="test") {
      this.isLoggedIn = true;
      return true;
    } else {
      this.isLoggedIn = false;
      return false;
    }
  }

  isAuthenticated() {
    return this.isLoggedIn;
  }
}
