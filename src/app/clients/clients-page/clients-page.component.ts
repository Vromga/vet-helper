import { Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { ClientService } from '../services/client.service';
import { IClients } from '../interface/clients';
import { fromEvent, Subscription } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';
import { ClientSendMailComponent } from '../client-send-mail/client-send-mail.component';
import { debounceTime, distinctUntilChanged, map } from 'rxjs/operators';
import { ClientSaveIdService } from '../services/client-save-id.service';

@Component({
  selector: 'app-clients-page',
  templateUrl: './clients-page.component.html',
  styleUrls: ['./clients-page.component.scss']
})
export class ClientsPageComponent implements OnInit, OnDestroy {
  public client: IClients;
  public clientInBlackList = false;
  @ViewChild('description', { static: true }) public description: ElementRef;
  private subscriptions: Subscription;
  private subscriptionsEvent: Subscription;

  constructor(private route: ActivatedRoute,
              private router: Router,
              public clientService: ClientService,
              private clientSaveIdService: ClientSaveIdService,
              public dialog: MatDialog) {
  }

  ngOnInit(): void {
    this.subscriptions = this.clientService.getAllClients().subscribe((clients: IClients[]) => {
      this.route.params.subscribe((params: Params) => {
        this.client = clients.find((client: IClients) => client._id === params.id);
        if (this.client.clientInBlackList.toString() === 'true') {
          this.clientInBlackList = true;
        }
      });
    });

    this.subscriptionsEvent = fromEvent(this.description.nativeElement, 'keyup')
      .pipe(
        debounceTime(1000),
        map((event: KeyboardEvent) => event.target)
      )
      .subscribe((value: HTMLInputElement) => {
        this.clientService.patch(this.clientSaveIdService.clientId, value.value);
      });
  }

  backForClients() {
    this.router.navigate(['/clients']);
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
    this.subscriptionsEvent.unsubscribe();
  }

  sendMail() {
    const dialogRef = this.dialog.open(ClientSendMailComponent,
      {
        data: {
          name: this.client.name,
          surname: this.client.surname,
          patronymic: this.client.patronymic,
          email: this.client.email
        }
      });
    dialogRef.afterClosed().subscribe(() => {
    }).unsubscribe();
  }
}
