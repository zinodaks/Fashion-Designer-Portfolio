import { Component, OnInit, HostListener } from '@angular/core';
import { TranslateService } from 'ng2-translate/ng2-translate';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  constructor(private translate: TranslateService) { }
  public dropup = document.getElementsByClassName('dropup-content');
  public selector = document.getElementsByClassName('languages');
  public globe = document.getElementsByClassName('selector');
  public links = document.getElementsByClassName('lang');

  ngOnInit() {
  }
  public useLanguage(language: string) {
    this.translate.use(language);
    localStorage.setItem('language', language);
    window.scrollTo(0, 0);
  }
  close() {
    (this.dropup[0] as HTMLElement).style.display = 'none';
  }
  @HostListener('document:click', ['$event'])
  @HostListener('document:touchstart', ['$event'])
  documentClick(event) {
    if (event.target !== this.selector[0] && event.target !== this.globe[0]) {
      if (event.target !== this.dropup[0] && event.target !== this.links[0]
        && event.target !== this.links[1] && event.target !== this.links[2]) {
        this.close();
      }
    }
  }
  toggle() {
    if ((this.dropup[0] as HTMLElement).style.display === '' || (this.dropup[0] as HTMLElement).style.display === 'none') {
      (this.dropup[0] as HTMLElement).style.display = 'block';
    } else {
      if ((this.dropup[0] as HTMLElement).style.display === 'block') {
        (this.dropup[0] as HTMLElement).style.display = 'none';
      }
    }
  }
}
