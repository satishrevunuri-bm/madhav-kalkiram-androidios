import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LanguageResource, trisandhyaResources } from '../../data/trisandhya-resources';

import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-trisandhya-panel',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './trisandhya-panel.html',
  styleUrl: './trisandhya-panel.scss'
})
export class TrisandhyaPanel {
  isOpen = true;
  allLanguages: LanguageResource[] = trisandhyaResources;
  filteredLanguages: LanguageResource[] = trisandhyaResources;

  togglePanel() {
    this.isOpen = !this.isOpen;
  }

  onSearch(event: Event) {
    const query = (event.target as HTMLInputElement).value.toLowerCase();
    this.filteredLanguages = this.allLanguages.filter(lang => 
      lang.englishName.toLowerCase().includes(query) || 
      lang.nativeName.toLowerCase().includes(query)
    );
  }

  // Prevents the browser from jumping to the search bar when audio is clicked
  blurActiveElement(): void {
    if (document.activeElement instanceof HTMLElement) {
      document.activeElement.blur();
    }
  }

  getFormattedTitle(lang: LanguageResource): { main: string, iast: boolean } {
    const hasIast = lang.englishName.includes('IAST') || lang.nativeName.includes('IAST');
    const cleanEng = lang.englishName.replace(/\s*\(Latin-IAST\)\s*/gi, '').trim();
    const cleanNat = lang.nativeName.replace(/\s*\(Latin-IAST\)\s*/gi, '').trim();
    
    let main = cleanEng.toLowerCase() === cleanNat.toLowerCase() ? cleanEng : `${cleanEng} (${cleanNat})`;
    
    return { main, iast: hasIast };
  }
}