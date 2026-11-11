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
  alertCircleOutline
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
      'alert-circle-outline': alertCircleOutline
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
