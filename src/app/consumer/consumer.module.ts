import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ConsumerRoutingModule } from './consumer-routing.module';
import { RootConsumerComponent } from './root-consumer/root-consumer.component';

@NgModule({
  declarations: [RootConsumerComponent],
  imports: [
    CommonModule,
    ConsumerRoutingModule
  ]
})
export class ConsumerModule { }
