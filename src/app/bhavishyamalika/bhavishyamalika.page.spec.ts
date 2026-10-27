import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterModule } from '@angular/router';

import { BhavishyamalikaPageModule } from './bhavishyamalika.module';
import { BhavishyamalikaPage } from './bhavishyamalika.page';

describe('BhavishyamalikaPage', () => {
  let component: BhavishyamalikaPage;
  let fixture: ComponentFixture<BhavishyamalikaPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BhavishyamalikaPageModule, RouterModule.forRoot([])]
    }).compileComponents();

    fixture = TestBed.createComponent(BhavishyamalikaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
