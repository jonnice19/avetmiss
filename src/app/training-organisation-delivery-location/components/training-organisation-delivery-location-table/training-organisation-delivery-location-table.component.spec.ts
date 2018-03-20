import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrainingOrganisationDeliveryLocationTableComponent } from './training-organisation-delivery-location-table.component';

describe('TrainingOrganisationDeliveryLocationTableComponent', () => {
  let component: TrainingOrganisationDeliveryLocationTableComponent;
  let fixture: ComponentFixture<TrainingOrganisationDeliveryLocationTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrainingOrganisationDeliveryLocationTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrainingOrganisationDeliveryLocationTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
