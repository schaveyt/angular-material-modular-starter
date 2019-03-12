import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import {BasicTableComponent} from '../basic-table/basic-table.component';

const tableRoutes: Routes = [
  { path: 'tables', component: BasicTableComponent }
];


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(tableRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class TablesRoutingModule { }
