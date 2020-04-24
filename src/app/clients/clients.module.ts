import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClientsRoutingModule } from './clients-routing.module';
import { ClientsComponent } from './clients/clients.component';
import { ShareModule } from '../share/share.module';
import { MaterialModule } from '../material/material.module';
import { CreateClientCardComponent } from './create-client-card/create-client-card.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ClientsPageComponent } from './clients-page/clients-page.component';
import { ClientCardComponent } from './client-card/client-card.component';
import { ClientSendMailComponent } from './client-send-mail/client-send-mail.component';

@NgModule({
  declarations: [ClientsComponent, CreateClientCardComponent, ClientsPageComponent, ClientCardComponent, ClientSendMailComponent],
  exports: [
    ClientsComponent
  ],
  entryComponents: [ClientSendMailComponent],
  imports: [
    CommonModule,
    ClientsRoutingModule,
    ShareModule,
    MaterialModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class ClientsModule {
}
