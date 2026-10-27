import { Component, signal, computed, inject } from '@angular/core';
import { activeBmLanguages, BMLanguage } from '../data/bm-languages.data';
import { DocumentService } from '../services/document.service';

@Component({
  selector: 'app-bhavishyamalika',
  templateUrl: 'bhavishyamalika.page.html',
  styleUrls: ['bhavishyamalika.page.scss'],
  standalone: false
})
export class BhavishyamalikaPage {
  languages = activeBmLanguages;
  searchQuery = signal('');
  
  private documentService = inject(DocumentService);

  filteredLanguages = computed(() => {
    const query = this.searchQuery().toLowerCase().trim();
    if (!query) {
      return this.languages;
    }
    
    return this.languages.filter(lang => 
      lang.nativeName.toLowerCase().includes(query) ||
      lang.englishName.toLowerCase().includes(query) ||
      lang.nativeTitle.toLowerCase().includes(query)
    );
  });

  getFormattedTitle(lang: BMLanguage): { main: string, iast: boolean } {
    const engName = lang.englishName || 'English';
    const hasIast = engName.includes('IAST') || lang.nativeName.includes('IAST');
    
    const cleanEng = engName.replace(/\s*\(Latin-IAST\)\s*/gi, '').trim();
    const cleanNat = lang.nativeName.replace(/\s*\(Latin-IAST\)\s*/gi, '').trim();
    
    let main = cleanEng.toLowerCase() === cleanNat.toLowerCase() ? cleanEng : `${cleanEng} (${cleanNat})`;
    
    return { main, iast: hasIast };
  }
}
