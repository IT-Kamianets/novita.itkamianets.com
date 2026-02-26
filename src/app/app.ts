import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header';
import { FooterComponent } from './components/footer/footer';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, FooterComponent],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('novita.itkamianets.com');

  constructor(private translate: TranslateService) {
    this.translate.addLangs(['uk', 'en', 'fr', 'it', 'de']);
    this.translate.setDefaultLang('uk');

    let langToUse = 'uk';
    if (typeof localStorage !== 'undefined') {
      const savedLang = localStorage.getItem('lang');
      if (savedLang && ['uk', 'en', 'fr', 'it', 'de'].includes(savedLang)) {
        langToUse = savedLang;
      } else {
        const browserLang = this.translate.getBrowserLang();
        if (browserLang?.match(/uk|en|fr|it|de/)) {
          langToUse = browserLang;
        }
      }
    }
    
    this.translate.use(langToUse);
  }
}