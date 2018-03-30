import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeliveryLocationViewerComponent } from './delivery-location-viewer.component';

describe('DeliveryLocationViewerComponent', () => {
  let component: DeliveryLocationViewerComponent;
  let fixture: ComponentFixture<DeliveryLocationViewerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeliveryLocationViewerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeliveryLocationViewerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
