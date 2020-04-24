import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  public mess = 0;
  opened = false;
  constructor() { }

  ngOnInit(): void {
  }

  incr(){
    this.mess += 1;
  }

  openSidenav(){
    this.opened = !this.opened;
  }
}
