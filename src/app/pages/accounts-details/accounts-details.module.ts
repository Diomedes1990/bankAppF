import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AccountsDetailsPageRoutingModule } from './accounts-details-routing.module';

import { AccountsDetailsPage } from './accounts-details.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AccountsDetailsPageRoutingModule
  ],
  declarations: [AccountsDetailsPage]
})
export class AccountsDetailsPageModule {}
