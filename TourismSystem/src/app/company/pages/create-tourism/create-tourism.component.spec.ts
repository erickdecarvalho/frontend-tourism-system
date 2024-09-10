import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateTourismComponent } from './create-tourism.component';

describe('CreateTourismComponent', () => {
  let component: CreateTourismComponent;
  let fixture: ComponentFixture<CreateTourismComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreateTourismComponent]
    });
    fixture = TestBed.createComponent(CreateTourismComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
