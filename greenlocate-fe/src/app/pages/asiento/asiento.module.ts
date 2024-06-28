import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AsientoPageRoutingModule } from './asiento-routing.module';

import { AsientoPage } from './asiento.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AsientoPageRoutingModule
  ],
  declarations: [AsientoPage]
})
export class AsientoPageModule {}
