import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainDrawerComponent } from './panels/main-drawer/main-drawer.component';
import { MatToolbarModule } from '@angular/material';

@NgModule({
  declarations: [
    MainDrawerComponent
  ],
  imports: [
    CommonModule,
    MatToolbarModule
  ],
  exports: [
    MainDrawerComponent
  ]
})
export class LibUiModule { }
