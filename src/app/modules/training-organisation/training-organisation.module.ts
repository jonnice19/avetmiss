import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { TrainingOrganisationRoutingModule } from './training-organisation-routing.module';
// service
import { TrainingOrganisationService } from './training-organisation.service';
// containers
import { TrainingOrganisationDashboardComponent } from './containers/training-organisation-dashboard/training-organisation-dashboard.component';
import { TrainingOrganisationCreateComponent } from './containers/training-organisation-create/training-organisation-create.component';
import { TrainingOrganisationViewerComponent } from 
'./containers/training-organisation-viewer/training-organisation-viewer.component';
// components
import { TrainingOrganisationListComponent } from './components/training-organisation-list/training-organisation-list.component';
import { TrainingOrganisationFormComponent } from './components/training-organisation-form/training-organisation-form.component';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    TrainingOrganisationRoutingModule
  ],
  declarations: [
    TrainingOrganisationDashboardComponent, 
      TrainingOrganisationListComponent, 
    TrainingOrganisationCreateComponent, 
    TrainingOrganisationViewerComponent,
      TrainingOrganisationFormComponent
  ],
  providers: [TrainingOrganisationService]
})
export class TrainingOrganisationModule { }
