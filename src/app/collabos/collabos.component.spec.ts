import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CollabosComponent } from './collabos.component';

describe('CollabosComponent', () => {
  let component: CollabosComponent;
  let fixture: ComponentFixture<CollabosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CollabosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CollabosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
