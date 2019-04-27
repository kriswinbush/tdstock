import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RootAnalystComponent } from './root-analyst/root-analyst.component';

const routes: Routes = [
  { path: '', component: RootAnalystComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AnalystRoutingModule { }
