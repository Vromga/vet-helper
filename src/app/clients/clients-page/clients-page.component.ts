import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { ClientService } from '../services/client.service';
import { IClients } from '../interface/clients';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-clients-page',
  templateUrl: './clients-page.component.html',
  styleUrls: ['./clients-page.component.scss']
})
export class ClientsPageComponent implements OnInit, OnDestroy {
  public client: IClients;
  private subscriptions: Subscription;

  constructor(private route: ActivatedRoute,
              private router: Router,
              public clientService: ClientService) {
  }

  ngOnInit(): void {
    this.subscriptions = this.clientService.getAllClients().subscribe((clients: IClients[]) => {
      this.route.params.subscribe((params: Params) => {
        console.log(clients);
        this.client = clients.find((client: IClients) => client._id === params.id);
        console.log(this.client);
      });
    });

  }

  backForClients() {
    this.router.navigate(['/clients']);
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }
}
