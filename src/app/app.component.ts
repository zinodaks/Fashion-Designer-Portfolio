import { Component } from '@angular/core';
import { TranslateService } from 'ng2-translate/ng2-translate';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private translate: TranslateService) {
    translate.addLangs(['fr', 'en', 'it']);
    if (localStorage.getItem('language')) {
      translate.setDefaultLang(localStorage.getItem('language'));
      translate.use(localStorage.getItem('language'));
    } else {
      translate.setDefaultLang('en');
      translate.use('en');
      localStorage.setItem('language', 'en');
    }
  }
  title = 'liliane-portfolio';
}
