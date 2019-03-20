import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Routes, RouterModule } from '@angular/router';

import { TablesModule } from '../tables/tables.module';
import { AppComponent } from '../../app.component';

const routes: Routes = [
  // { path: 'home', component: HomeComponent},
  { path: 'table', loadChildren: () => TablesModule }, // lazy load the module :-)
  { path: '', component: AppComponent, pathMatch: 'full' }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class RoutingModule { }
