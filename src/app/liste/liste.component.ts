import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-liste',
  templateUrl: './liste.component.html',
  styleUrls: ['./liste.component.scss']
})
export class ListeComponent implements OnInit {
  
  users: Object;
  
  constructor(private _http: HttpService) { }

  ngOnInit() {
    this._http.maMethode();
    this._http.getUsers().subscribe(data => {
      this.users = data;
      console.log(this.users);
    })
  }

}
