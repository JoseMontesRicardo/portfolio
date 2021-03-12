import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GeneralContainerComponent } from './containers/general-container/general-container.component';



@NgModule({
  exports: [GeneralContainerComponent],
  declarations: [GeneralContainerComponent],
  imports: [
    CommonModule
  ]
})
export class GenericContainerModule { }
