import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TechnologiesContainerComponent } from './containers/technologies-container/technologies-container.component';
import { TechnologiesRoutingModule } from './technologies-routing.module';
import { GenericContainerModule } from '@shared/generic-container/generic-container.module';
import { TechToolsComponent } from './components/tech-tools/tech-tools.component';
import { TechCardModule } from '@shared/tech-card/tech-card.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import {MatSnackBarModule} from '@angular/material/snack-bar';

@NgModule({
  declarations: [TechnologiesContainerComponent, TechToolsComponent],
  imports: [
    CommonModule,
    FlexLayoutModule,
    TechnologiesRoutingModule,
    GenericContainerModule,
    TechCardModule,
    MatSnackBarModule,
  ]
})
export class TechnologiesModule { }
