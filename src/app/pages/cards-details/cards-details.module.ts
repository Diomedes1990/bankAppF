import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CardsDetailsPageRoutingModule } from './cards-details-routing.module';

import { CardsDetailsPage } from './cards-details.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CardsDetailsPageRoutingModule
  ],
  declarations: [CardsDetailsPage]
})
export class CardsDetailsPageModule {}
