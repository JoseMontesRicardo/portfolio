import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TechnologiesContainerComponent } from './containers/technologies-container/technologies-container.component';
import { TechnologiesRoutingModule } from './technologies-routing.module';



@NgModule({
  declarations: [TechnologiesContainerComponent],
  imports: [
    CommonModule,
    TechnologiesRoutingModule
  ]
})
export class TechnologiesModule { }
