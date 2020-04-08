import {AfterViewInit, Component, ViewChild} from '@angular/core';
import CLIENT_DATA from '../../../assets/mockData';
import {MatTableDataSource} from "@angular/material/table";
import {MatSort} from "@angular/material/sort";
import {MatPaginator} from "@angular/material/paginator";
import {Router} from "@angular/router";


export interface IClients {
  position: number;
  surname: string;
  name: string;
  patronymic: string;
  petName: string;
  city: string;
  address: string;
  balance: number;
  lastInvoice: string;
  id: number;
}

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.scss']
})
export class ClientsComponent implements AfterViewInit {
  displayedColumns: string[] = ['position', 'surname', 'name', 'patronymic', 'petName', 'city', 'address', 'balance', 'lastInvoice'];
  dataSource: MatTableDataSource<IClients> = new MatTableDataSource(CLIENT_DATA);
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private router: Router) {
  }

  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }


  logging(row) {
    console.log(row.id);
  }

  applyFilter(value: string) {
    this.dataSource.filter = value.trim().toLowerCase();
  }

  addClient() {
    this.router.navigate(['/create-client']);
  }
}
