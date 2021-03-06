import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShareRoutingModule } from './share-routing.module';
import { FilterComponent } from './filter/filter.component';
import { MaterialModule } from '../material/material.module';
import { AbbrCityAndStreetPipe } from './abbreviationPipes/abbreviation-cities.pipe';

@NgModule({
  declarations: [FilterComponent, AbbrCityAndStreetPipe],
  exports: [
    FilterComponent,
    AbbrCityAndStreetPipe
  ],
  imports: [
    CommonModule,
    ShareRoutingModule,
    MaterialModule
  ]
})
export class ShareModule {
}
