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
import { ClientPetsComponent } from './pets/client-pets/client-pets.component';
import { PetsCardComponent } from './pets/pets-card/pets-card.component';
import { CreatePetsCardComponent } from './pets/create-pets-card/create-pets-card.component';
import { PetMedicalCardComponent } from './pets/pet-medical-card/pet-medical-card.component';
import { QuillModule } from 'ngx-quill';
import { AddDiagnosisComponent } from './pets/pet-medical-card/add-diagnosis/add-diagnosis.component';

@NgModule({
  declarations: [ClientsComponent, CreateClientCardComponent, ClientsPageComponent, ClientCardComponent, ClientSendMailComponent, ClientPetsComponent, PetsCardComponent, CreatePetsCardComponent, PetMedicalCardComponent, AddDiagnosisComponent],
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
    FormsModule,
    QuillModule
  ]
})
export class ClientsModule {
}
