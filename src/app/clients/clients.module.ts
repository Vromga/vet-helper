import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClientsRoutingModule } from './clients-routing.module';
import { ClientsComponent } from './clients/clients.component';
import {ShareModule} from "../share/share.module";
import {MaterialModule} from "../material/material.module";
import { CreateClientCardComponent } from './create-client-card/create-client-card.component';

@NgModule({
  declarations: [ClientsComponent, CreateClientCardComponent],
  exports: [
    ClientsComponent
  ],
  imports: [
    CommonModule,
    ClientsRoutingModule,
    ShareModule,
    MaterialModule,
  ]
})
export class ClientsModule { }
