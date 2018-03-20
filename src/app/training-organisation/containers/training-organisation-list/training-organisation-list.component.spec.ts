import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrainingOrganisationListComponent } from './training-organisation-list.component';

describe('TrainingOrganisationListComponent', () => {
  let component: TrainingOrganisationListComponent;
  let fixture: ComponentFixture<TrainingOrganisationListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrainingOrganisationListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrainingOrganisationListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
