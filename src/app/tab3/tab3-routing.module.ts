import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Tab3Page } from './tab3.page';

const routes: Routes = [
  {
    path: '',
    component: Tab3Page,
  },
  {
    path: 'profile-details',
    loadChildren: () => import('../profile-details/profile-details.module').then( m => m.ProfileDetailsPageModule)
  },
  {
    path: 'coupons',
    loadChildren: () => import('../coupons/coupons.module').then( m => m.CouponsPageModule)
  },
  {
    path: 'help-center',
    loadChildren: () => import('../help-center/help-center.module').then( m => m.HelpCenterPageModule)
  },
  {
    path: 'refer-earn',
    loadChildren: () => import('../refer-earn/refer-earn.module').then( m => m.ReferEarnPageModule)
  },
  {
    path: 'orders',
    loadChildren: () => import('../orders/orders.module').then( m => m.OrdersPageModule)
  },
  {
    path: 'settings',
    loadChildren: () => import('../settings/settings.module').then( m => m.SettingsPageModule)
  },
  {
    path: 'egl-credit',
    loadChildren: () => import('../egl-credit/egl-credit.module').then( m => m.EglCreditPageModule)
  },
  {
    path: 'privacy-policy',
    loadChildren: () => import('../privacy-policy/privacy-policy.module').then( m => m.PrivacyPolicyPageModule)
  },
  {
    path: 'terms-of-use',
    loadChildren: () => import('../terms-of-use/terms-of-use.module').then( m => m.TermsOfUsePageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Tab3PageRoutingModule {}
