import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

// Angular Material imports
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

// Angular Flex Layout
import { FlexLayoutModule } from '@angular/flex-layout';


// Custom Modules
//
import { MaterialModule } from './modules/material/material.module';
import { RoutingModule } from './modules/routing/routing.module';
import { TablesModule } from './modules/tables/tables.module';

// External Modules
//
import {LibUiModule} from 'lib-ui';

// Custom Components
//
import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    LibUiModule,
    MaterialModule,
    FlexLayoutModule,
    RoutingModule,
    TablesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
