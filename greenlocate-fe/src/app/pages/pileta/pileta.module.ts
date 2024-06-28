import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PiletaPageRoutingModule } from './pileta-routing.module';

import { PiletaPage } from './pileta.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PiletaPageRoutingModule
  ],
  declarations: [PiletaPage]
})
export class PiletaPageModule {}
