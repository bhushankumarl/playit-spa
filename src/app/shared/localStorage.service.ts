import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  constructor() {}
  set(value) {
    window.localStorage.setItem('token', value);
  }
  delete(key) {
    window.localStorage.removeItem(key);
  }
}
