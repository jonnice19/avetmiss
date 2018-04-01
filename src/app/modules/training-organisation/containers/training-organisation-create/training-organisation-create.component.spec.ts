import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrainingOrganisationCreateComponent } from './training-organisation-create.component';

describe('TrainingOrganisationCreateComponent', () => {
  let component: TrainingOrganisationCreateComponent;
  let fixture: ComponentFixture<TrainingOrganisationCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrainingOrganisationCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrainingOrganisationCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
