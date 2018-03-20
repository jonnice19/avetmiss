import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TrainingOrganisationDeliveryLocationRoutingModule } from './training-organisation-delivery-location-routing.module';
import { TrainingOrganisationDeliveryLocationListComponent } from './containers/training-organisation-delivery-location-list/training-organisation-delivery-location-list.component';
import { TrainingOrganisationDeliveryLocationTableComponent } from './components/training-organisation-delivery-location-table/training-organisation-delivery-location-table.component';

@NgModule({
  imports: [
    CommonModule,
    TrainingOrganisationDeliveryLocationRoutingModule
  ],
  declarations: [TrainingOrganisationDeliveryLocationListComponent, TrainingOrganisationDeliveryLocationTableComponent]
})
export class TrainingOrganisationDeliveryLocationModule { }
