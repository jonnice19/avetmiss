import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { DeliveryLocation } from '../../models/delivery-location.interface';

@Component({
  selector: 'app-delivery-location-list',
  templateUrl: './delivery-location-list.component.html',
  styleUrls: ['./delivery-location-list.component.scss']
})
export class DeliveryLocationListComponent implements OnInit {
  @Input() deliveryLocations: DeliveryLocation[];

  @Output() view: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  onView(id: number) {
    this.view.emit(id);
  }

}
