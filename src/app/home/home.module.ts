import { IonicModule } from '@ionic/angular/lazy';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { HomePageRoutingModule } from './home-routing.module';
import { ScrollingTicker } from '../components/scrolling-ticker/scrolling-ticker';
import { TrisandhyaPanel } from '../components/trisandhya-panel/trisandhya-panel';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    HomePageRoutingModule,
    ScrollingTicker,
    TrisandhyaPanel
  ],
  declarations: [HomePage]
})
export class HomePageModule {}
