import { IonicModule } from '@ionic/angular/lazy';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TrisandhyaPage } from './trisandhya.page';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { TrisandhyaPageRoutingModule } from './trisandhya-routing.module';
import { TrisandhyaPanel } from '../components/trisandhya-panel/trisandhya-panel';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    TrisandhyaPageRoutingModule,
    TrisandhyaPanel
  ],
  declarations: [TrisandhyaPage]
})
export class TrisandhyaPageModule {}
