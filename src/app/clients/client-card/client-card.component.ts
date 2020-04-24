import { Component, Input, OnInit } from '@angular/core';
import { IClients } from '../interface/clients';

@Component({
  selector: 'app-client-card',
  templateUrl: './client-card.component.html',
  styleUrls: ['./client-card.component.scss']
})
export class ClientCardComponent implements OnInit {
  @Input() client: IClients;
  @Input() blackList: boolean;
  constructor() {
  }

  ngOnInit(): void {
  }

}
