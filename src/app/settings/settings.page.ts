import { Component } from '@angular/core';
import { addIcons } from 'ionicons';
import {
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
  selector: 'app-settings',
  templateUrl: './settings.page.html',
  styleUrls: ['./settings.page.scss'],
  standalone: false
})
export class SettingsPage {
  appName = 'Trisandhya - Kalkiram';
  appVersion = '1.0.10';
  buildNumber = '11';
  developerName = 'kalkiram_madhav';
  communityName = 'Devotees of Lord Madhav';
  supportEmail = 'kalkirammadhav3234@gmail.com';
  websiteUrl = 'https://kalkiram.com';
  privacyUrl = 'https://satishrevunuri-bm.github.io/madhav-kalkiram-androidios/';
  termsUrl = 'https://satishrevunuri-bm.github.io/madhav-kalkiram-androidios/terms.html';

  expandedSection: 'privacy' | 'terms' | null = null;

  constructor() {
    addIcons({
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

  toggleSection(section: 'privacy' | 'terms') {
    if (this.expandedSection === section) {
      this.expandedSection = null;
    } else {
      this.expandedSection = section;
    }
  }

  openExternal(url: string) {
    window.open(url, '_blank');
  }

  sendEmail() {
    window.location.href = `mailto:${this.supportEmail}?subject=Trisandhya%20-%20Kalkiram%20App%20Support`;
  }
}
