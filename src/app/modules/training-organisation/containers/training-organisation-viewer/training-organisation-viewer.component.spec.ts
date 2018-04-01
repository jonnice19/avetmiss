import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrainingOrganisationViewerComponent } from './training-organisation-viewer.component';

describe('TrainingOrganisationViewerComponent', () => {
  let component: TrainingOrganisationViewerComponent;
  let fixture: ComponentFixture<TrainingOrganisationViewerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrainingOrganisationViewerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrainingOrganisationViewerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
