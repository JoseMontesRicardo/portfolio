import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTabsModule } from '@angular/material/tabs';
import { HomeContainerComponent } from './containers/home-container/home-container.component';
import { HomeRoutingModule } from './home-routing.module';
import { GenericContainerModule } from '@shared/generic-container/generic-container.module';
import { RowCardModule } from '@shared/row-card-module/row-card-module.module';
import { HeaderComponent } from './components/header/header.component';
import { AboutMeComponent } from './components/about-me/about-me.component';
import { ToolsComponent } from './components/tools/tools.component';
import { FlexLayoutModule } from '@angular/flex-layout';


@NgModule({
  declarations: [HomeContainerComponent, HeaderComponent, AboutMeComponent, ToolsComponent],
  imports: [
    CommonModule,
    FlexLayoutModule,
    GenericContainerModule,
    HomeRoutingModule,
    MatTabsModule,
    RowCardModule,
    GenericContainerModule
  ]
})
export class HomeModule { }
