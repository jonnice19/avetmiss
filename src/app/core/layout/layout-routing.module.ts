import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LayoutComponent } from './layout.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: 'training-organisation',
        loadChildren: '../../training-organisation/training-organisation.module#TrainingOrganisationModule',
      },
      {
        path: 'training-organisation-delivery-location',
        loadChildren: '../../training-organisation-delivery-location/training-organisation-delivery-location.module#TrainingOrganisationDeliveryLocationModule',
      },
      {
        path: 'programs',
        loadChildren: '../../program/program.module#ProgramModule'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutRoutingModule {}
