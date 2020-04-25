import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pets-card',
  templateUrl: './pets-card.component.html',
  styleUrls: ['./pets-card.component.scss']
})
export class PetsCardComponent implements OnInit {
  pets: [] = [];
  constructor() { }

  ngOnInit(): void {
  }

}
