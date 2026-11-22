import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { Preferences } from '@capacitor/preferences';
import {
  LanguageResource,
  trisandhyaResources,
  TRISANDHYA_PDF_VERSION,
  getTrisandhyaPdfUrl
} from '../../data/trisandhya-resources';

export interface LanguageGroup {
  letter: string;
  languages: LanguageResource[];
}

@Component({
  selector: 'app-trisandhya-panel',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule],
  templateUrl: './trisandhya-panel.html',
  styleUrl: './trisandhya-panel.scss'
})
export class TrisandhyaPanel implements OnInit, OnDestroy {
  isOpen = true;
  allLanguages: LanguageResource[] = trisandhyaResources;
  pdfVersion = TRISANDHYA_PDF_VERSION;

  // Pinned languages (stored by unique htmlFilename)
  pinnedFilenames: string[] = [];
  private readonly PINNED_STORAGE_KEY = 'pinned_trisandhya_languages';

  // Modal & search state
  isSearchModalOpen = false;
  modalSearchQuery = '';

  // Tile highlight state
  highlightedTileFilename: string | null = null;
  private highlightTimer: any = null;

  async ngOnInit(): Promise<void> {
    await this.loadPinnedLanguages();
  }

  ngOnDestroy(): void {
    if (this.highlightTimer) {
      clearTimeout(this.highlightTimer);
    }
  }

  togglePanel(): void {
    this.isOpen = !this.isOpen;
  }

  getPdfUrl(pdfFilename: string): string {
    return getTrisandhyaPdfUrl(pdfFilename, this.pdfVersion);
  }

  // --- PINNING LOGIC ---
  async loadPinnedLanguages(): Promise<void> {
    try {
      const { value } = await Preferences.get({ key: this.PINNED_STORAGE_KEY });
      if (value) {
        const parsed = JSON.parse(value);
        if (Array.isArray(parsed)) {
          this.pinnedFilenames = parsed;
        }
      }
    } catch (e) {
      console.warn('Could not read pinned languages from Preferences:', e);
    }
  }

  isPinned(lang: LanguageResource): boolean {
    return this.pinnedFilenames.includes(lang.htmlFilename);
  }

  async togglePin(lang: LanguageResource, event?: Event): Promise<void> {
    if (event) {
      event.stopPropagation();
      event.preventDefault();
    }

    if (this.isPinned(lang)) {
      this.pinnedFilenames = this.pinnedFilenames.filter(f => f !== lang.htmlFilename);
    } else {
      this.pinnedFilenames = [...this.pinnedFilenames, lang.htmlFilename];
    }

    try {
      await Preferences.set({
        key: this.PINNED_STORAGE_KEY,
        value: JSON.stringify(this.pinnedFilenames)
      });
    } catch (e) {
      console.warn('Could not save pinned languages to Preferences:', e);
    }
  }

  getPinnedLanguages(): LanguageResource[] {
    return this.pinnedFilenames
      .map(filename => this.allLanguages.find(l => l.htmlFilename === filename))
      .filter((l): l is LanguageResource => !!l);
  }

  getUnpinnedLanguages(): LanguageResource[] {
    return this.allLanguages.filter(l => !this.isPinned(l));
  }

  getTopLanguages(): LanguageResource[] {
    // Permanent top 3: Hindi, English, Russian
    const topFilenames = ['trisandhya_hi.html', 'trisandhya_en-iast.html', 'trisandhya_ru-iast.html'];
    return topFilenames
      .map(fn => this.allLanguages.find(l => l.htmlFilename === fn))
      .filter((l): l is LanguageResource => !!l);
  }

  // --- MODAL SELECTION & AUTO-PIN LOGIC ---
  async selectLanguageFromModal(lang: LanguageResource): Promise<void> {
    this.closeSearchModal();
    this.isOpen = true;

    // Auto-pin the selected language to Daily Prayer at the top
    if (!this.isPinned(lang)) {
      this.pinnedFilenames = [lang.htmlFilename, ...this.pinnedFilenames.filter(f => f !== lang.htmlFilename)];
      try {
        await Preferences.set({
          key: this.PINNED_STORAGE_KEY,
          value: JSON.stringify(this.pinnedFilenames)
        });
      } catch (e) {
        console.warn('Could not save pinned languages to Preferences:', e);
      }
    }

    // Highlight the tile in the Pinned section at the top
    this.highlightedTileFilename = lang.htmlFilename;

    setTimeout(() => {
      const tileEl = document.getElementById('tile-' + lang.htmlFilename);
      if (tileEl) {
        tileEl.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
    }, 150);

    if (this.highlightTimer) {
      clearTimeout(this.highlightTimer);
    }
    this.highlightTimer = setTimeout(() => {
      this.highlightedTileFilename = null;
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

  getLanguageGroups(): LanguageGroup[] {
    const q = this.modalSearchQuery.trim().toLowerCase();
    let langs = this.allLanguages;

    if (q) {
      langs = langs.filter(lang =>
        lang.englishName.toLowerCase().includes(q) ||
        lang.nativeName.toLowerCase().includes(q)
      );
    }

    const groupMap = new Map<string, LanguageResource[]>();

    for (const lang of langs) {
      const cleanEng = lang.englishName.replace(/\s*\(Latin-IAST\)\s*/gi, '').trim();
      const letter = (cleanEng.charAt(0) || '#').toUpperCase();
      if (!groupMap.has(letter)) {
        groupMap.set(letter, []);
      }
      groupMap.get(letter)!.push(lang);
    }

    const sortedLetters = Array.from(groupMap.keys()).sort();
    return sortedLetters.map(letter => {
      const groupLangs = groupMap.get(letter)!;
      groupLangs.sort((a, b) => {
        const nameA = a.englishName.replace(/\s*\(Latin-IAST\)\s*/gi, '').toLowerCase();
        const nameB = b.englishName.replace(/\s*\(Latin-IAST\)\s*/gi, '').toLowerCase();
        return nameA.localeCompare(nameB);
      });
      return {
        letter,
        languages: groupLangs
      };
    });
  }

  // Prevents the browser from jumping when audio is clicked
  blurActiveElement(): void {
    if (document.activeElement instanceof HTMLElement) {
      document.activeElement.blur();
    }
  }

  getFormattedTitle(lang: LanguageResource): { main: string; iast: boolean } {
    const hasIast = lang.englishName.includes('IAST') || lang.nativeName.includes('IAST');
    const cleanEng = lang.englishName.replace(/\s*\(Latin-IAST\)\s*/gi, '').trim();
    const cleanNat = lang.nativeName.replace(/\s*\(Latin-IAST\)\s*/gi, '').trim();

    let main = cleanEng.toLowerCase() === cleanNat.toLowerCase() ? cleanEng : `${cleanEng} (${cleanNat})`;

    return { main, iast: hasIast };
  }
}
