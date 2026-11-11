import { Component, OnInit } from '@angular/core';
import { Capacitor } from '@capacitor/core';
import { StatusBar, Style } from '@capacitor/status-bar';
import { addIcons } from 'ionicons';
import {
  home,
  book,
  documentText,
  arrowBack,
  removeCircleOutline,
  addCircleOutline,
  alertCircleOutline,
  settings,
  shieldCheckmarkOutline,
  documentTextOutline,
  globeOutline,
  mailOutline,
  openOutline,
  chevronForwardOutline,
  chevronDownOutline,
  closeCircleOutline,
  informationCircleOutline
} from 'ionicons/icons';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
  standalone: false,
})
export class AppComponent implements OnInit {
  constructor() {
    addIcons({
      home,
      book,
      documentText,
      'document-text': documentText,
      arrowBack,
      'arrow-back': arrowBack,
      removeCircleOutline,
      'remove-circle-outline': removeCircleOutline,
      addCircleOutline,
      'add-circle-outline': addCircleOutline,
      alertCircleOutline,
      'alert-circle-outline': alertCircleOutline,
      settings,
      shieldCheckmarkOutline,
      'shield-checkmark-outline': shieldCheckmarkOutline,
      documentTextOutline,
      'document-text-outline': documentTextOutline,
      globeOutline,
      'globe-outline': globeOutline,
      mailOutline,
      'mail-outline': mailOutline,
      openOutline,
      'open-outline': openOutline,
      chevronForwardOutline,
      'chevron-forward-outline': chevronForwardOutline,
      chevronDownOutline,
      'chevron-down-outline': chevronDownOutline,
      closeCircleOutline,
      'close-circle-outline': closeCircleOutline,
      informationCircleOutline,
      'information-circle-outline': informationCircleOutline
    });
  }

  async ngOnInit() {
    if (Capacitor.isNativePlatform()) {
      try {
        await StatusBar.setStyle({ style: Style.Light });
        await StatusBar.setBackgroundColor({ color: '#fcfaf5' });
      } catch (err) {
        console.warn('StatusBar initialization notice:', err);
      }
    }
  }
}
