import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RootConsumerComponent } from './root-consumer/root-consumer.component';

const routes: Routes = [
  {path:'', component: RootConsumerComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ConsumerRoutingModule { }
