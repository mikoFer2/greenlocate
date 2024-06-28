import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ResbalinPage } from './resbalin.page';

const routes: Routes = [
  {
    path: '',
    component: ResbalinPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ResbalinPageRoutingModule {}
