import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrainingOrganisationDeliveryLocationListComponent } from './training-organisation-delivery-location-list.component';

describe('TrainingOrganisationDeliveryLocationListComponent', () => {
  let component: TrainingOrganisationDeliveryLocationListComponent;
  let fixture: ComponentFixture<TrainingOrganisationDeliveryLocationListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrainingOrganisationDeliveryLocationListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrainingOrganisationDeliveryLocationListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
