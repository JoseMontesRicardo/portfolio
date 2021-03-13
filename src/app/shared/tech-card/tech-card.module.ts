import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { TechCardComponent } from './components/tech-card/tech-card.component';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  exports: [TechCardComponent],
  declarations: [TechCardComponent],
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    FlexLayoutModule,
  ]
})
export class TechCardModule { }
