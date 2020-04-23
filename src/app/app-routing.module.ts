import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {CreateClientCardComponent} from "./clients/create-client-card/create-client-card.component";
import {ClientsComponent} from "./clients/clients/clients.component";
import {ClientsPageComponent} from "./clients/clients-page/clients-page.component";
import { HospitalForInPatientsComponent } from './hospital/hospital-for-in-patients/hospital-for-in-patients.component';


const routes: Routes = [
  {path: '', redirectTo: 'clients', pathMatch: 'full'},
  {path: 'clients', component: ClientsComponent},
  {path: 'clients/:id', component: ClientsPageComponent},
  {path: 'create-client', component: CreateClientCardComponent},
  {path: 'hospital', component: HospitalForInPatientsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
