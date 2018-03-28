import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrainingOrganisationDetailComponent } from './training-organisation-detail.component';

describe('TrainingOrganisationDetailComponent', () => {
  let component: TrainingOrganisationDetailComponent;
  let fixture: ComponentFixture<TrainingOrganisationDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrainingOrganisationDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrainingOrganisationDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
