import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Tab1Page } from './tab1.page';

const routes: Routes = [
  {
    path: '',
    component: Tab1Page,
  },
  {
    path: 'loan-details',
    loadChildren: () => import('../loan-details/loan-details.module').then( m => m.LoanDetailsPageModule)
  },
  {
    path: 'account-summary',
    loadChildren: () => import('../account-summary/account-summary.module').then( m => m.AccountSummaryPageModule)
  },
  {
    path: 'loan-request',
    loadChildren: () => import('../loan-request/loan-request.module').then( m => m.LoanRequestPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Tab1PageRoutingModule {}
