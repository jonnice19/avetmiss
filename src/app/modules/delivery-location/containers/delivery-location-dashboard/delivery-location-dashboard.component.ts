import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { DeliveryLocation } from '../../models/delivery-location.interface';

import { DeliveryLocationService } from '../../delivery-location.service';

@Component({
  selector: 'app-delivery-location-dashboard',
  templateUrl: './delivery-location-dashboard.component.html',
  styleUrls: ['./delivery-location-dashboard.component.scss']
})
export class DeliveryLocationDashboardComponent implements OnInit {
  title: string = 'Delivery Locations';
  deliveryLocations: DeliveryLocation[];

  constructor(
    private deliveryLocationService: DeliveryLocationService,
    private router: Router
  ) { }

  ngOnInit() {
    this.deliveryLocationService
      .getDeliveryLocations()
      .subscribe(
        (data: DeliveryLocation[]) => this.deliveryLocations = data
      );
  }

  viewDetail(id: number) {
    this.router.navigate(['delivery-locations/detail', id])
  }

}
