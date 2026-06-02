import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root' 
})
export class GlobalStateService {

  user: string = 'John Doe';

  setUser(user: string) {
    this.user = user;
  }

}