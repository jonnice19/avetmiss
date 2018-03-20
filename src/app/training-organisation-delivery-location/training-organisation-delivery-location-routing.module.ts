import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TrainingOrganisationDeliveryLocationListComponent } from './containers/training-organisation-delivery-location-list/training-organisation-delivery-location-list.component';

const routes: Routes = [
  {
    path: '',
    component: TrainingOrganisationDeliveryLocationListComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TrainingOrganisationDeliveryLocationRoutingModule {}
