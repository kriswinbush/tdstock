import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path:'', redirectTo: 'landing', pathMatch: 'full' },
  { path: 'landing', loadChildren: './landing/landing.module#LandingModule'},
  { path: 'analyst', loadChildren: './analyst/analyst.module#AnalystModule' },
  { path: 'consumer', loadChildren: './consumer/consumer.module#ConsumerModule' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
