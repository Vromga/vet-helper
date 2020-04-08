import {Component, OnInit} from '@angular/core';


@Component({
  selector: 'app-create-client-card',
  templateUrl: './create-client-card.component.html',
  styleUrls: ['./create-client-card.component.scss']
})
export class CreateClientCardComponent implements OnInit {
  public typeHelp: Array<string>= ['Временный','Вызова','Клиника','Постоянный','Случайный'];

  constructor() {
  }

  ngOnInit(): void {
  }

  addMoreType() {
    console.log('hello world')
  }
}
