import { Component } from '@angular/core';
import { addIcons } from 'ionicons';
import { home, book, documentText, settings } from 'ionicons/icons';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss'],
  standalone: false
})
export class TabsPage {

  constructor() {
    addIcons({
      home,
      book,
      documentText,
      'document-text': documentText,
      settings
    });
  }

}
