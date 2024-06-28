import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ColumpioPageRoutingModule } from './columpio-routing.module';

import { ColumpioPage } from './columpio.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ColumpioPageRoutingModule
  ],
  declarations: [ColumpioPage]
})
export class ColumpioPageModule {}
