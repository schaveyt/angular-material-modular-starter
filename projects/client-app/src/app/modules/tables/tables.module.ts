import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BasicTableComponent } from './basic-table/basic-table.component';
import { TablesRoutingModule } from './tables-routing/tables-routing.module';

@NgModule({
  declarations: [BasicTableComponent],
  imports: [
    CommonModule,
    TablesRoutingModule
  ]
})
export class TablesModule { }
