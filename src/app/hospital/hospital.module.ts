import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HospitalRoutingModule } from './hospital-routing.module';
import { HospitalForInPatientsComponent } from './hospital-for-in-patients/hospital-for-in-patients.component';


@NgModule({
  declarations: [HospitalForInPatientsComponent],
  imports: [
    CommonModule,
    HospitalRoutingModule
  ]
})
export class HospitalModule { }
