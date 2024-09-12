import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TourismDetailComponent } from './tourism-detail.component';

describe('TourismDetailComponent', () => {
  let component: TourismDetailComponent;
  let fixture: ComponentFixture<TourismDetailComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TourismDetailComponent]
    });
    fixture = TestBed.createComponent(TourismDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
