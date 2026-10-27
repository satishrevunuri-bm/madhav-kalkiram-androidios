import { Component } from '@angular/core';
import { ScrollingTicker, TickerItem } from '../components/scrolling-ticker/scrolling-ticker';
import { TrisandhyaPanel } from '../components/trisandhya-panel/trisandhya-panel';
import { allGemsItems, allMadhavaItems, allTrikalItems } from '../data/ticker-data';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: false
})
export class HomePage {
  gemsItems: TickerItem[] = allGemsItems;
  madhavaItems: TickerItem[] = allMadhavaItems;
  trikalItems: TickerItem[] = allTrikalItems;
}
