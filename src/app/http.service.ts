import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor() { }

  maMethode() {
    return console.log('Hello !');
  }
}
