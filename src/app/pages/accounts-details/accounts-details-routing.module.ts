import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AccountsDetailsPage } from './accounts-details.page';

const routes: Routes = [
  {
    path: '',
    component: AccountsDetailsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AccountsDetailsPageRoutingModule {}
