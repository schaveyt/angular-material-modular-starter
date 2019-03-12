import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import {BasicTableComponent} from '../basic-table/basic-table.component';
import { TableLogicAtServerComponent } from '../table-logic-at-server/table-logic-at-server.component';

const tableRoutes: Routes = [
  { path: 'basic-table', component: BasicTableComponent },
  { path: 'server-table', component: TableLogicAtServerComponent }
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
