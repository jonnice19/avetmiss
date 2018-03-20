import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrainingOrganisationFormComponent } from './training-organisation-form.component';

describe('TrainingOrganisationFormComponent', () => {
  let component: TrainingOrganisationFormComponent;
  let fixture: ComponentFixture<TrainingOrganisationFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrainingOrganisationFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrainingOrganisationFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
