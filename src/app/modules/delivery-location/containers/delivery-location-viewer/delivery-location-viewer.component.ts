import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import 'rxjs/add/operator/switchMap';

import { DeliveryLocation } from '../../models/delivery-location.interface';

import { DeliveryLocationService } from '../../delivery-location.service';

@Component({
  selector: 'app-delivery-location-viewer',
  templateUrl: './delivery-location-viewer.component.html',
  styleUrls: ['./delivery-location-viewer.component.scss']
})
export class DeliveryLocationViewerComponent implements OnInit {
  deliveryLocation: DeliveryLocation;

  constructor(
    private deliveryLocationService: DeliveryLocationService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    this.route.params
      .switchMap((data: DeliveryLocation) => this.deliveryLocationService.getDeliveryLocation(data.id))
      .subscribe((data: DeliveryLocation) => this.deliveryLocation = data);
  }

  viewList() {
    this.router.navigate(['delivery-locations']);
  }

  updateDeliveryLocation(event: DeliveryLocation) {
    this.deliveryLocationService
      .updateDeliveryLocation(event)
      .subscribe(
        () => this.deliveryLocation = Object.assign({}, event),
        () => console.log('Error'),
        () => console.log('Success')
      );
  }

  removeDeliveryLocation(event: number) {
    this.deliveryLocationService
      .deleteDeliveryLocation(event)
      .subscribe(
        () => console.log('Success'),
        () => console.log('Error'),
        () => this.viewList()
      );
  }

}
