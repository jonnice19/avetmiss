import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TrainingOrganisationListComponent } from './containers/training-organisation-list/training-organisation-list.component';
import { TrainingOrganisationFormComponent } from './containers/training-organisation-form/training-organisation-form.component';

const routes: Routes = [
  {
    path: '',
    component: TrainingOrganisationListComponent
  },
  {
    path: 'new',
    component: TrainingOrganisationFormComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TrainingOrganisationRoutingModule {}
