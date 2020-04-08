import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShareRoutingModule } from './share-routing.module';
import { FilterComponent } from './filter/filter.component';
import {MaterialModule} from "../material/material.module";
import {MatSelectModule} from "@angular/material/select";


@NgModule({
  declarations: [FilterComponent],
  exports: [
    FilterComponent
  ],
  imports: [
    CommonModule,
    ShareRoutingModule,
    MaterialModule,
    MatSelectModule
  ]
})
export class ShareModule { }
