import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { SingleRowCardComponent } from './components/single-row-card/single-row-card.component';
import { FlexLayoutModule } from '@angular/flex-layout';


@NgModule({
  exports: [SingleRowCardComponent],
  declarations: [SingleRowCardComponent],
  imports: [
    MatCardModule,
    CommonModule,
    FlexLayoutModule
  ]
})
export class RowCardModule { }
