import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LayoutComponent } from './layout.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: 'delivery-locations',
        loadChildren: '../../modules/delivery-location/delivery-location.module#DeliveryLocationModule'
      },
      {
        path: 'programs',
        loadChildren: '../../modules/program/program.module#ProgramModule'
      },
      {
        path: 'subjects',
        loadChildren: '../../modules/subject/subject.module#SubjectModule'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutRoutingModule {}
