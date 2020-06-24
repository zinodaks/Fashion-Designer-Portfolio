import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PagedPortfolioComponent } from './paged-portfolio.component';

describe('PagedPortfolioComponent', () => {
  let component: PagedPortfolioComponent;
  let fixture: ComponentFixture<PagedPortfolioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PagedPortfolioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PagedPortfolioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
