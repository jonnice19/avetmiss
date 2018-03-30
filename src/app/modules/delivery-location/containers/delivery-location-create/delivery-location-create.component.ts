import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { DeliveryLocation } from '../../models/delivery-location.interface';

import { DeliveryLocationService } from '../../delivery-location.service';

@Component({
  selector: 'app-delivery-location-create',
  templateUrl: './delivery-location-create.component.html',
  styleUrls: ['./delivery-location-create.component.scss']
})
export class DeliveryLocationCreateComponent implements OnInit {

  constructor(
    private deliveryLocationService: DeliveryLocationService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  viewList() {
    this.router.navigate(['delivery-locations']);
  }

  createDeliveryLocation(event: DeliveryLocation) {
    this.deliveryLocationService
      .createDeliveryLocation(event)
      .subscribe(
        () => console.log('Success'),
        () => console.log('Error'),
        () => this.viewList()
      );
  }

}
