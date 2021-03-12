import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeContainerComponent } from './containers/home-container/home-container.component';
import { HomeRoutingModule } from './home-routing.module';
import { GenericContainerModule } from '@shared/generic-container/generic-container.module';
import { HeaderComponent } from './components/header/header.component';
import { AboutMeComponent } from './components/about-me/about-me.component';



@NgModule({
  declarations: [HomeContainerComponent, HeaderComponent, AboutMeComponent],
  imports: [
    CommonModule,
    GenericContainerModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
