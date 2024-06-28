import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ResbalinPageRoutingModule } from './resbalin-routing.module';

import { ResbalinPage } from './resbalin.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ResbalinPageRoutingModule
  ],
  declarations: [ResbalinPage]
})
export class ResbalinPageModule {}
