import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  constructor() { }

  /**
   * Set local storage item
   * @param key 
   * @param value 
   */
  setItem(key: string, value: any) {
    window.localStorage.setItem(key, JSON.stringify(value));
  }

  /**
   * Get local storage item
   * @param key 
   * @returns 
   */
  getItem(key: string) {
    const value = window.localStorage.getItem(key);
    if (value && typeof value !== 'string') {
      return JSON.parse(value);
    } else if (value) {
      return value;
    }
    return null;
  }
}
