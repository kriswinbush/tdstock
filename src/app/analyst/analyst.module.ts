import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { AnalystRoutingModule } from './analyst-routing.module';

import { MaterialModule } from "../material/material.module";
import { CovalentModule } from "../covalent/covalent.module";
import { RootAnalystComponent } from './root-analyst/root-analyst.component';
import { CovalentFileModule } from '@covalent/core/file';

@NgModule({
  declarations: [ RootAnalystComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    CovalentFileModule,
    MaterialModule,
    CovalentModule,
    AnalystRoutingModule
  ]
})
export class AnalystModule { }
