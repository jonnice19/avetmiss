import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TrainingOrganisationListComponent } from './containers/training-organisation-list/training-organisation-list.component';
import { TrainingOrganisationFormComponent } from './containers/training-organisation-form/training-organisation-form.component';
import { TrainingOrganisationDetailComponent } from './components/training-organisation-detail/training-organisation-detail.component';

const routes: Routes = [
  {
    path: '',
    component: TrainingOrganisationListComponent
  },
  {
    path: 'new',
    component: TrainingOrganisationFormComponent
  },
  {
    path: 'detail/:id',
    component: TrainingOrganisationDetailComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TrainingOrganisationRoutingModule {}
