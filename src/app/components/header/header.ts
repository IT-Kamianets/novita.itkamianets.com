import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, TranslateModule, CommonModule],
  templateUrl: './header.html',
  styleUrl: './header.scss'
})
export class HeaderComponent {
  currentLang: string;
  isDarkMode = false;
  isLangMenuOpen = false;

  languages = [
    { code: 'uk', label: 'UA', name: 'Українська' },
    { code: 'en', label: 'EN', name: 'English' },
    { code: 'fr', label: 'FR', name: 'Français' },
    { code: 'it', label: 'IT', name: 'Italiano' },
    { code: 'de', label: 'DE', name: 'Deutsch' }
  ];

  constructor(private translate: TranslateService) {
    let initialLang = 'uk';
    if (typeof localStorage !== 'undefined') {
      initialLang = localStorage.getItem('lang') || this.translate.currentLang || this.translate.defaultLang || 'uk';
    }
    this.currentLang = initialLang;
    
    // Слідкуємо за зміною мови
    this.translate.onLangChange.subscribe((event) => {
      this.currentLang = event.lang;
    });

    // Перевірка збереженої теми
    if (typeof localStorage !== 'undefined') {
      this.isDarkMode = localStorage.getItem('theme') === 'dark';
      this.applyTheme();
    }
  }

  getCurrentLangLabel(): string {
    return this.languages.find(l => l.code === this.currentLang)?.label || 'UA';
  }

  changeLanguage(lang: string) {
    if (this.currentLang === lang) {
      this.isLangMenuOpen = false;
      return;
    }

    this.translate.use(lang).subscribe({
      next: () => {
        this.currentLang = lang;
        this.isLangMenuOpen = false;
        if (typeof localStorage !== 'undefined') {
          localStorage.setItem('lang', lang);
        }
      },
      error: () => {
        // Fallback
        this.translate.use(lang);
        this.currentLang = lang;
        this.isLangMenuOpen = false;
      }
    });
  }

  toggleTheme() {
    this.isDarkMode = !this.isDarkMode;
    this.applyTheme();
    if (typeof localStorage !== 'undefined') {
      localStorage.setItem('theme', this.isDarkMode ? 'dark' : 'light');
    }
  }

  toggleLangMenu() {
    this.isLangMenuOpen = !this.isLangMenuOpen;
  }

  private applyTheme() {
    if (typeof document !== 'undefined') {
      if (this.isDarkMode) {
        document.body.classList.add('dark-mode');
      } else {
        document.body.classList.remove('dark-mode');
      }
    }
  }
}
