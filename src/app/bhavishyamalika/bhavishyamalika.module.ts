import { IonicModule } from '@ionic/angular/lazy';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BhavishyamalikaPage } from './bhavishyamalika.page';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { BhavishyamalikaPageRoutingModule } from './bhavishyamalika-routing.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    BhavishyamalikaPageRoutingModule
  ],
  declarations: [BhavishyamalikaPage]
})
export class BhavishyamalikaPageModule {}
