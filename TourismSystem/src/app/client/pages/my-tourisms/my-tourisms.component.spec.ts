import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyTourismsComponent } from './my-tourisms.component';

describe('MyTourismsComponent', () => {
  let component: MyTourismsComponent;
  let fixture: ComponentFixture<MyTourismsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MyTourismsComponent]
    });
    fixture = TestBed.createComponent(MyTourismsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
