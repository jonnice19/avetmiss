import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TrainingOrganisationDashboardComponent } from './containers/training-organisation-dashboard/training-organisation-dashboard.component';
import { TrainingOrganisationCreateComponent } from './containers/training-organisation-create/training-organisation-create.component';
import { TrainingOrganisationViewerComponent } from './containers/training-organisation-viewer/training-organisation-viewer.component';

const routes: Routes = [
  { path: '', component: TrainingOrganisationDashboardComponent, pathMatch: 'full' },
  { path: 'create', component: TrainingOrganisationCreateComponent, },
  { path: 'detail/:id', component: TrainingOrganisationViewerComponent, }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TrainingOrganisationRoutingModule {}