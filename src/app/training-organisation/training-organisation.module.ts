import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
// Routing
import { TrainingOrganisationRoutingModule } from './training-organisation-routing.module';
// Containers
import { TrainingOrganisationListComponent } from './containers/training-organisation-list/training-organisation-list.component';
import { TrainingOrganisationFormComponent } from './containers/training-organisation-form/training-organisation-form.component';
// Components
import { TrainingOrganisationComponent } from './components/training-organisation/training-organisation.component';
import { TrainingOrganisationTableComponent } from './components/training-organisation-table/training-organisation-table.component';
import { TrainingAddressComponent } from './components/training-address/training-address.component';
// Services
import { TrainingOrganisationService } from './training-organisation.service';
import { TrainingContactComponent } from './components/training-contact/training-contact.component';


@NgModule({
  declarations: [
    TrainingOrganisationListComponent, 
    TrainingOrganisationTableComponent, 
    TrainingOrganisationFormComponent, 
    TrainingOrganisationComponent, 
    TrainingAddressComponent, TrainingContactComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    TrainingOrganisationRoutingModule
  ],
  providers: [TrainingOrganisationService]
})
export class TrainingOrganisationModule { }
