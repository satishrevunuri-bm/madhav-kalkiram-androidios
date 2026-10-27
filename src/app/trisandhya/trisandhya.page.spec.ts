import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterModule } from '@angular/router';

import { TrisandhyaPageModule } from './trisandhya.module';
import { TrisandhyaPage } from './trisandhya.page';

describe('TrisandhyaPage', () => {
  let component: TrisandhyaPage;
  let fixture: ComponentFixture<TrisandhyaPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TrisandhyaPageModule, RouterModule.forRoot([])]
    }).compileComponents();

    fixture = TestBed.createComponent(TrisandhyaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
