import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {CreateClientCardComponent} from "./clients/create-client-card/create-client-card.component";
import {ClientsComponent} from "./clients/clients/clients.component";


const routes: Routes = [
  {path: '', redirectTo: 'clients', pathMatch: 'full'},
  {path: 'clients', component: ClientsComponent},
  {path: 'create-client', component: CreateClientCardComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
