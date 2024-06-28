import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PiletaPage } from './pileta.page';

const routes: Routes = [
  {
    path: '',
    component: PiletaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PiletaPageRoutingModule {}
