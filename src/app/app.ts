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

    const browserLang = this.translate.getBrowserLang();
    this.translate.use(browserLang?.match(/uk|en|fr|it|de/) ? browserLang : 'uk');
  }
}