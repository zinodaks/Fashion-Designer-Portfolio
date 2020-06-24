import { Component, OnInit } from '@angular/core';
import { ProjectsService } from '../projects.service';

@Component({
  selector: 'app-paged-portfolio',
  templateUrl: './paged-portfolio.component.html',
  styleUrls: ['./paged-portfolio.component.css']
})
export class PagedPortfolioComponent implements OnInit {

  constructor(private projectsService: ProjectsService) { }
  public pages = document.getElementsByClassName('page');
  public indicators = document.getElementsByClassName('link');
  public lastIndicator = document.getElementsByClassName('different');
  current = 0;
  indicator = 1;
  public portfolio = [];

  showPage(current: number) {
    for (const page of (Array.from(this.pages))) {
      (page as HTMLElement).style.display = 'none';
    }
    for (const indicator of (Array.from(this.indicators))) {
      (indicator as HTMLElement).classList.remove('active');
    }
    (this.pages[current] as HTMLElement).style.display = 'block';
    if (this.current === 0) {
      this.indicator = 1;
    }
    this.indicators[this.indicator].classList.add('active');
  }

  nextPage() {
    if (this.current === this.pages.length - 1) {
      this.current = 0;
      this.lastIndicator[0].innerHTML = '7';
    } else {
      this.current++;
      this.indicator++;
    }
    if (this.current > 6) {
      this.lastIndicator[0].innerHTML = (this.current + 1).toString();
      this.indicator = 7;
    }
    this.showPage(this.current);
  }
  previousPage() {
    if (this.current > 0) {
      this.current--;
      if (this.current <= 6) {
        this.indicator--;
      }
      if (this.current > 6) {
        this.lastIndicator[0].innerHTML = (this.current + 1).toString();
      }
    }
    this.showPage(this.current);
  }
  toPage(event) {
    this.current = parseInt(event.target.innerHTML, 10) - 1;
    if (this.current <= 6) {
      this.lastIndicator[0].innerHTML = '7'.toString();
      this.indicator = this.current + 1;
      this.showPage(this.current);
    }

  }
  ngOnInit() {
    this.portfolio = this.projectsService.getPortfolio();
    this.showPage(this.current);
  }

}
