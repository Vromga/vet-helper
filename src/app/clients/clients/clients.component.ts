import { AfterViewInit, Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { Router } from '@angular/router';
import { ClientService } from '../services/client.service';
import { IClients } from '../interface/clients';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.scss']
})
export class ClientsComponent implements OnInit, AfterViewInit, OnDestroy {
  displayedColumns: string[] = ['surname', 'city'];
  dataSource: MatTableDataSource<IClients> = new MatTableDataSource();
  @ViewChild(MatSort, { static: false }) sort: MatSort;
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  loading = true;
  clientSubscribe: Subscription;

  constructor(private router: Router,
              private clientService: ClientService) {
  }

  public ngOnInit(): void {
    this.loading = true;
    this.clientSubscribe = this.clientService.getAllClients().subscribe((clients: IClients[]) => {
      this.dataSource = new MatTableDataSource(clients);
      this.loading = false;
      this.setSortAndPagination();
    });
  }

  public ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }

  public setSortAndPagination(): void {
    if (!this.loading) {
      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginator;
    }
  }

  public openPersonalCard(row): void {
    this.router.navigate(['/clients', row]);
  }

  public applyFilter(value): void {
    this.dataSource.filter = value.value.trim().toLowerCase();
  }

  addClient() {
    this.router.navigate(['/create-client']);
  }

  ngOnDestroy(): void {
    this.clientSubscribe.unsubscribe();
  }
}
