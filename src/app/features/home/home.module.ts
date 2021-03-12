import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeContainerComponent } from './containers/home-container/home-container.component';
import { HomeRoutingModule } from './home-routing.module';



@NgModule({
  declarations: [HomeContainerComponent],
  imports: [
    CommonModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
