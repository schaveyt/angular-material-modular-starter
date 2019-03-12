import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule, MatPaginatorModule, MatSortModule, MatProgressSpinnerModule } from '@angular/material';
import { BasicTableComponent } from './basic-table/basic-table.component';
import { TablesRoutingModule } from './tables-routing/tables-routing.module';
import { TableLogicAtServerComponent } from './table-logic-at-server/table-logic-at-server.component';

@NgModule({
  declarations: [BasicTableComponent, TableLogicAtServerComponent],
  imports: [
    CommonModule,
    MatPaginatorModule,
    MatProgressSpinnerModule,
    MatSortModule,
    MatTableModule,
    TablesRoutingModule,
  ]
})
export class TablesModule { }
