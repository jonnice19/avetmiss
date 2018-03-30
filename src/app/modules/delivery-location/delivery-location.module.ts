import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { DeliveryLocationRoutingModule } from './delivery-location-routing.module';
// services
import { DeliveryLocationService } from './delivery-location.service';
// containers
import { DeliveryLocationDashboardComponent } from './containers/delivery-location-dashboard/delivery-location-dashboard.component';
import { DeliveryLocationCreateComponent } from './containers/delivery-location-create/delivery-location-create.component';
import { DeliveryLocationViewerComponent } from './containers/delivery-location-viewer/delivery-location-viewer.component';
// components
import { DeliveryLocationListComponent } from './components/delivery-location-list/delivery-location-list.component';
import { DeliveryLocationFormComponent } from './components/delivery-location-form/delivery-location-form.component';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    DeliveryLocationRoutingModule
  ],
  declarations: [
    DeliveryLocationDashboardComponent, 
      DeliveryLocationListComponent, 
    DeliveryLocationCreateComponent, 
    DeliveryLocationViewerComponent, 
      DeliveryLocationFormComponent
  ],
  providers: [DeliveryLocationService]
})
export class DeliveryLocationModule { }
