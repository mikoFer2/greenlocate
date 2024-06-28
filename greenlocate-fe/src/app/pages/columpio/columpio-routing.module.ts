import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ColumpioPage } from './columpio.page';

const routes: Routes = [
  {
    path: '',
    component: ColumpioPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ColumpioPageRoutingModule {}
