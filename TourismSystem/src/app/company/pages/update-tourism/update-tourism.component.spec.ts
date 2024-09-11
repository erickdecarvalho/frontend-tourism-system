import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateTourismComponent } from './update-tourism.component';

describe('UpdateTourismComponent', () => {
  let component: UpdateTourismComponent;
  let fixture: ComponentFixture<UpdateTourismComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UpdateTourismComponent]
    });
    fixture = TestBed.createComponent(UpdateTourismComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
