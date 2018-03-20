import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrainingOrganisationTableComponent } from './training-organisation-table.component';

describe('TrainingOrganisationTableComponent', () => {
  let component: TrainingOrganisationTableComponent;
  let fixture: ComponentFixture<TrainingOrganisationTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrainingOrganisationTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrainingOrganisationTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
