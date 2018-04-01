import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrainingOrganisationDashboardComponent } from './training-organisation-dashboard.component';

describe('TrainingOrganisationDashboardComponent', () => {
  let component: TrainingOrganisationDashboardComponent;
  let fixture: ComponentFixture<TrainingOrganisationDashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrainingOrganisationDashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrainingOrganisationDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
