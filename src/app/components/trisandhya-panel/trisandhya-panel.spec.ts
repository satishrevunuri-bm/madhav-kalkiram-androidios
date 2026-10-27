import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrisandhyaPanel } from './trisandhya-panel';

describe('TrisandhyaPanel', () => {
  let component: TrisandhyaPanel;
  let fixture: ComponentFixture<TrisandhyaPanel>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TrisandhyaPanel],
    }).compileComponents();

    fixture = TestBed.createComponent(TrisandhyaPanel);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
