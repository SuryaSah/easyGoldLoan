import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EglCreditPageRoutingModule } from './egl-credit-routing.module';

import { EglCreditPage } from './egl-credit.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EglCreditPageRoutingModule
  ],
  declarations: [EglCreditPage]
})
export class EglCreditPageModule {}
