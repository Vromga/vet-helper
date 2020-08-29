import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// import { PetsCardComponent } from './pets/pets-card/pets-card.component';


const routes: Routes = [
  // {path: '', component: PetsCardComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientsRoutingModule { }
