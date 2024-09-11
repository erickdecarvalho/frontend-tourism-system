import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllTourismsComponent } from './all-tourisms.component';

describe('AllTourismsComponent', () => {
  let component: AllTourismsComponent;
  let fixture: ComponentFixture<AllTourismsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AllTourismsComponent]
    });
    fixture = TestBed.createComponent(AllTourismsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
