import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ConsumerRoutingModule } from './consumer-routing.module';

import { MaterialModule } from "../material/material.module";
import { CovalentModule } from "../covalent/covalent.module";
import { RootConsumerComponent } from './root-consumer/root-consumer.component';

@NgModule({
  declarations: [RootConsumerComponent],
  imports: [
    CommonModule,
    MaterialModule,
    CovalentModule,
    ConsumerRoutingModule
  ]
})
export class ConsumerModule { }
