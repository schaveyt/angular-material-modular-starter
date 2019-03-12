import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from '../../components/home/home.component';

import { TablesModule } from '../tables/tables.module';

const routes: Routes = [
  { path: 'home', component: HomeComponent},
  { path: 'table', loadChildren: () => TablesModule }, // lazy load the module :-)
  { path: '', redirectTo: '/home', pathMatch: 'full' }
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
