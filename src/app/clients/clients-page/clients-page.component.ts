import { Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { ClientService } from '../services/client.service';
import { IClients } from '../interface/clients.interface';
import { fromEvent, Subscription } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';
import { ClientSendMailComponent } from '../client-send-mail/client-send-mail.component';
import { debounceTime, distinctUntilChanged, map } from 'rxjs/operators';
import { SubSink } from 'subsink';

@Component({
  selector: 'app-clients-page',
  templateUrl: './clients-page.component.html',
  styleUrls: ['./clients-page.component.scss']
})
export class ClientsPageComponent implements OnInit, OnDestroy {
  private clientID: string;
  public client: IClients;
  public clientInBlackList = false;
  @ViewChild('description', { static: true }) public description: ElementRef;
  // private subscriptions: Subscription;
  // private subscriptionsEvent: Subscription;
  private sub = new SubSink();

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    public clientService: ClientService,
    public dialog: MatDialog
  ) {
  }

  ngOnInit(): void {
    this.sub.add(this.clientService.getAllClients().subscribe((clients: IClients[]) => {
      this.route.params.subscribe((params: Params) => {
        this.client = clients.find((client: IClients) => client._id === params.id);
        if (this.client.clientInBlackList.toString() === 'true') {
          this.clientInBlackList = true;
        }
      });
    }));
    this.sub.add(this.route.params.subscribe(id => this.clientID = id.id));
    // this.subscriptionsEvent = fromEvent(this.description.nativeElement, 'keyup')
    //   .pipe(
    //     debounceTime(1000),
    //     map((event: KeyboardEvent) => event.target)
    //   )
    //   .subscribe((value: HTMLInputElement) => {
    //     this.clientService.patch(this.clientSaveIdService.clientId, value.value);
    //   });
  }

  backForClients() {
    this.router.navigate(['/clients']);
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
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

  createPetCard() {
    this.router.navigate([`clients/${this.clientID}`, 'create-pets']);
  }
}
