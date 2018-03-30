import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DeliveryLocationDashboardComponent } from './containers/delivery-location-dashboard/delivery-location-dashboard.component';
import { DeliveryLocationCreateComponent } from './containers/delivery-location-create/delivery-location-create.component';
import { DeliveryLocationViewerComponent } from './containers/delivery-location-viewer/delivery-location-viewer.component';

const routes: Routes = [
  { path: '', component: DeliveryLocationDashboardComponent, pathMatch: 'full'},
  { path: 'create', component: DeliveryLocationCreateComponent, },
  { path: 'detail/:id', component: DeliveryLocationViewerComponent, }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DeliveryLocationRoutingModule {}