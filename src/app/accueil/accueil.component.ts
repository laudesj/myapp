import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.scss']
})
export class AccueilComponent implements OnInit {

  clickCounter: number = 0;
  nom: string = '';

  constructor() { }

  ngOnInit() {
  }

  countClick(): void {
    this.clickCounter += 1;
  }

}
