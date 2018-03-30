import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeliveryLocationDashboardComponent } from './delivery-location-dashboard.component';

describe('DeliveryLocationDashboardComponent', () => {
  let component: DeliveryLocationDashboardComponent;
  let fixture: ComponentFixture<DeliveryLocationDashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeliveryLocationDashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeliveryLocationDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
