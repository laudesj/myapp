import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient) { }

  maMethode() {
    return console.log('Hello !');
  }

  getUsers() {
    return this.http.get('https://reqres.in/api/users');
  }
}
