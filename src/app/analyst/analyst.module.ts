import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AnalystRoutingModule } from './analyst-routing.module';

import { MaterialModule } from "../material/material.module";
import { CovalentModule } from "../covalent/covalent.module";
import { RootAnalystComponent } from './root-analyst/root-analyst.component';

@NgModule({
  declarations: [RootAnalystComponent],
  imports: [
    CommonModule,
    MaterialModule,
    CovalentModule,
    AnalystRoutingModule
  ]
})
export class AnalystModule { }
