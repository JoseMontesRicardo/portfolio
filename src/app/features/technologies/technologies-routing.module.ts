import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TechnologiesContainerComponent } from './containers/technologies-container/technologies-container.component';

const routes: Routes = [
  {
    path: '',
    component: TechnologiesContainerComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TechnologiesRoutingModule { }
