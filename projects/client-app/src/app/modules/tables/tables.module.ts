import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BasicTableComponent } from './basic-table/basic-table.component';
import { TablesRoutingModule } from './tables-routing/tables-routing.module';
import { TableLogicAtServerComponent } from './table-logic-at-server/table-logic-at-server.component';
import { BasicTableDnDComponent } from './basic-dnd-table/basic-dnd-table.component';

import {
  MatIconModule,
  MatPaginatorModule,
  MatProgressSpinnerModule,
  MatSortModule,
  MatTableModule,
} from '@angular/material';

import {DragDropModule} from '@angular/cdk/drag-drop';

@NgModule({
  declarations: [
    BasicTableComponent,
    BasicTableDnDComponent,
    TableLogicAtServerComponent
  ],
  imports: [
    CommonModule,
    DragDropModule,
    MatIconModule,
    MatPaginatorModule,
    MatProgressSpinnerModule,
    MatSortModule,
    MatTableModule,
    TablesRoutingModule,
  ]
})
export class TablesModule { }
