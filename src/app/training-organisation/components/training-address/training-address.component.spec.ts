import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrainingAddressComponent } from './training-address.component';

describe('TrainingAddressComponent', () => {
  let component: TrainingAddressComponent;
  let fixture: ComponentFixture<TrainingAddressComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrainingAddressComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrainingAddressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
