import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BalancinPageRoutingModule } from './balancin-routing.module';

import { BalancinPage } from './balancin.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BalancinPageRoutingModule
  ],
  declarations: [BalancinPage]
})
export class BalancinPageModule {}
