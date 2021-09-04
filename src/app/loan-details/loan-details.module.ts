import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LoanDetailsPageRoutingModule } from './loan-details-routing.module';

import { LoanDetailsPage } from './loan-details.page';
import { LoanService } from './loan-details.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LoanDetailsPageRoutingModule
  ],
  declarations: [LoanDetailsPage],
  providers: [LoanService]
})
export class LoanDetailsPageModule {}
