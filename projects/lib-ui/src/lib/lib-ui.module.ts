import { NgModule } from '@angular/core';
import { LibUiComponent } from './lib-ui.component';
import { HelloWorldComponent } from './hello-world/hello-world.component';

@NgModule({
  declarations: [LibUiComponent, HelloWorldComponent],
  imports: [
  ],
  exports: [LibUiComponent, HelloWorldComponent]
})
export class LibUiModule { }
