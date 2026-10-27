import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

export interface TickerItem {
  text: string;
  gemColor?: string; // Specifically for the gem icon
}

@Component({
  selector: 'app-scrolling-ticker',
  imports: [CommonModule],
  templateUrl: './scrolling-ticker.html',
  styleUrl: './scrolling-ticker.scss',
})
export class ScrollingTicker {
  @Input() items: TickerItem[] = [];
  @Input() backgroundColor: string = '#FFD700'; // Defaulting to gold now
  @Input() animationDuration: string = '30s';
}