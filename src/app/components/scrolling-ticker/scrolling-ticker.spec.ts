import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScrollingTicker } from './scrolling-ticker';

describe('ScrollingTicker', () => {
  let component: ScrollingTicker;
  let fixture: ComponentFixture<ScrollingTicker>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ScrollingTicker],
    }).compileComponents();

    fixture = TestBed.createComponent(ScrollingTicker);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
