import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EglCreditPage } from './egl-credit.page';

const routes: Routes = [
  {
    path: '',
    component: EglCreditPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EglCreditPageRoutingModule {}
