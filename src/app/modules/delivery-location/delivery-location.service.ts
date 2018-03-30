import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

import { DeliveryLocation } from './models/delivery-location.interface';

const BASE_URL = 'http://localhost:3004';
const DELIVERY_LOCATION_URL = `${BASE_URL}/delivery-locations`;

@Injectable()
export class DeliveryLocationService {
  constructor(
    private http: HttpClient
  ) {}

  getDeliveryLocations(): Observable<DeliveryLocation[]> {
    return this.http.get<DeliveryLocation[]>(DELIVERY_LOCATION_URL);
  }

  getDeliveryLocation(id: number): Observable<DeliveryLocation> {
    return this.http.get<DeliveryLocation>(`${DELIVERY_LOCATION_URL}/${id}`);
  }

  createDeliveryLocation(deliveryLocation: DeliveryLocation): Observable<DeliveryLocation> {
    return this.http.post<DeliveryLocation>(DELIVERY_LOCATION_URL, deliveryLocation);
  }

  updateDeliveryLocation(deliveryLocation: DeliveryLocation): Observable<DeliveryLocation> {
    return this.http.put<DeliveryLocation>(`${DELIVERY_LOCATION_URL}/${deliveryLocation.id}`, deliveryLocation);
  }

  deleteDeliveryLocation(id: number) {
    return this.http.delete(`${DELIVERY_LOCATION_URL}/${id}`);
  }
}