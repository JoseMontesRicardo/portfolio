import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
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
    MatDividerModule,
  ]
})
export class TechCardModule { }
