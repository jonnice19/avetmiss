import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrainingContactComponent } from './training-contact.component';

describe('TrainingContactComponent', () => {
  let component: TrainingContactComponent;
  let fixture: ComponentFixture<TrainingContactComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrainingContactComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrainingContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
