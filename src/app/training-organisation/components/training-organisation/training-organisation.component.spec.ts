import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrainingOrganisationComponent } from './training-organisation.component';

describe('TrainingOrganisationComponent', () => {
  let component: TrainingOrganisationComponent;
  let fixture: ComponentFixture<TrainingOrganisationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrainingOrganisationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrainingOrganisationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
