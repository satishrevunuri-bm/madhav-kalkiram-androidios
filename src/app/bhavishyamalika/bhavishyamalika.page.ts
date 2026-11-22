import { Component, OnInit, OnDestroy, inject } from '@angular/core';
import { Preferences } from '@capacitor/preferences';
import { activeBmLanguages, BMLanguage } from '../data/bm-languages.data';
import { DocumentService } from '../services/document.service';

export interface BMLanguageGroup {
  letter: string;
  languages: BMLanguage[];
}

@Component({
  selector: 'app-bhavishyamalika',
  templateUrl: 'bhavishyamalika.page.html',
  styleUrls: ['bhavishyamalika.page.scss'],
  standalone: false
})
export class BhavishyamalikaPage implements OnInit, OnDestroy {
  languages = activeBmLanguages;

  // Pinned languages (stored by unique code)
  pinnedCodes: string[] = [];
  private readonly PINNED_STORAGE_KEY = 'pinned_bm_languages';

  // Modal & Search state
  isSearchModalOpen = false;
  modalSearchQuery = '';

  // Card highlight state
  highlightedCardCode: string | null = null;
  private highlightTimer: any = null;

  private documentService = inject(DocumentService);

  async ngOnInit(): Promise<void> {
    await this.loadPinnedLanguages();
  }

  ngOnDestroy(): void {
    if (this.highlightTimer) {
      clearTimeout(this.highlightTimer);
    }
  }

  // --- PINNING LOGIC ---
  async loadPinnedLanguages(): Promise<void> {
    try {
      const { value } = await Preferences.get({ key: this.PINNED_STORAGE_KEY });
      if (value) {
        const parsed = JSON.parse(value);
        if (Array.isArray(parsed)) {
          this.pinnedCodes = parsed;
        }
      }
    } catch (e) {
      console.warn('Could not read pinned BM languages from Preferences:', e);
    }
  }

  isPinned(lang: BMLanguage): boolean {
    return this.pinnedCodes.includes(lang.code);
  }

  async togglePin(lang: BMLanguage, event?: Event): Promise<void> {
    if (event) {
      event.stopPropagation();
      event.preventDefault();
    }

    if (this.isPinned(lang)) {
      this.pinnedCodes = this.pinnedCodes.filter(c => c !== lang.code);
    } else {
      this.pinnedCodes = [...this.pinnedCodes, lang.code];
    }

    try {
      await Preferences.set({
        key: this.PINNED_STORAGE_KEY,
        value: JSON.stringify(this.pinnedCodes)
      });
    } catch (e) {
      console.warn('Could not save pinned BM languages to Preferences:', e);
    }
  }

  getPinnedLanguages(): BMLanguage[] {
    return this.pinnedCodes
      .map(code => this.languages.find(l => l.code === code))
      .filter((l): l is BMLanguage => !!l);
  }

  getUnpinnedLanguages(): BMLanguage[] {
    return this.languages.filter(l => !this.isPinned(l));
  }

  getTopLanguages(): BMLanguage[] {
    const topCodes = ['hi', 'en', 'ru'];
    return topCodes
      .map(code => this.languages.find(l => l.code === code))
      .filter((l): l is BMLanguage => !!l);
  }

  // --- MODAL SELECTION & AUTO-PIN LOGIC ---
  async selectLanguageFromModal(lang: BMLanguage): Promise<void> {
    this.closeSearchModal();

    // Auto-pin to top if not already pinned
    if (!this.isPinned(lang)) {
      this.pinnedCodes = [lang.code, ...this.pinnedCodes.filter(c => c !== lang.code)];
      try {
        await Preferences.set({
          key: this.PINNED_STORAGE_KEY,
          value: JSON.stringify(this.pinnedCodes)
        });
      } catch (e) {
        console.warn('Could not save pinned BM languages to Preferences:', e);
      }
    }

    this.highlightedCardCode = lang.code;

    setTimeout(() => {
      const cardEl = document.getElementById('bm-card-' + lang.code);
      if (cardEl) {
        cardEl.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
    }, 150);

    if (this.highlightTimer) {
      clearTimeout(this.highlightTimer);
    }
    this.highlightTimer = setTimeout(() => {
      this.highlightedCardCode = null;
    }, 3500);
  }

  // --- SEARCH MODAL LOGIC ---
  openSearchModal(): void {
    this.isSearchModalOpen = true;
    this.modalSearchQuery = '';
  }

  closeSearchModal(): void {
    this.isSearchModalOpen = false;
  }

  getLanguageGroups(): BMLanguageGroup[] {
    const q = this.modalSearchQuery.trim().toLowerCase();
    let langs = this.languages;

    if (q) {
      langs = langs.filter(lang =>
        lang.nativeName.toLowerCase().includes(q) ||
        (lang.englishName && lang.englishName.toLowerCase().includes(q)) ||
        lang.nativeTitle.toLowerCase().includes(q)
      );
    }

    const groupMap = new Map<string, BMLanguage[]>();

    for (const lang of langs) {
      const name = lang.englishName || lang.nativeName;
      const cleanName = name.replace(/\s*\(Latin-IAST\)\s*/gi, '').trim();
      const letter = (cleanName.charAt(0) || '#').toUpperCase();
      if (!groupMap.has(letter)) {
        groupMap.set(letter, []);
      }
      groupMap.get(letter)!.push(lang);
    }

    const sortedLetters = Array.from(groupMap.keys()).sort();
    return sortedLetters.map(letter => {
      const groupLangs = groupMap.get(letter)!;
      groupLangs.sort((a, b) => {
        const nameA = (a.englishName || a.nativeName).replace(/\s*\(Latin-IAST\)\s*/gi, '').toLowerCase();
        const nameB = (b.englishName || b.nativeName).replace(/\s*\(Latin-IAST\)\s*/gi, '').toLowerCase();
        return nameA.localeCompare(nameB);
      });
      return {
        letter,
        languages: groupLangs
      };
    });
  }

  getFormattedTitle(lang: BMLanguage): { main: string; iast: boolean } {
    const engName = lang.englishName || 'English';
    const hasIast = engName.includes('IAST') || lang.nativeName.includes('IAST');

    const cleanEng = engName.replace(/\s*\(Latin-IAST\)\s*/gi, '').trim();
    const cleanNat = lang.nativeName.replace(/\s*\(Latin-IAST\)\s*/gi, '').trim();

    let main = cleanEng.toLowerCase() === cleanNat.toLowerCase() ? cleanEng : `${cleanEng} (${cleanNat})`;

    return { main, iast: hasIast };
  }
}
