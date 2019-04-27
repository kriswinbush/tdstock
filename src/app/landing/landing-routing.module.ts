import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RootLandingComponent } from './root-landing/root-landing.component';

const routes: Routes = [
  { path: '', component: RootLandingComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LandingRoutingModule { }
