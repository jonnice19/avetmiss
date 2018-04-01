import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { TrainerRoutingModule } from './trainer-routing.module';
// services
import { TrainerService } from './trainer.service';
// containers
import { TrainerDashboardComponent } from './containers/trainer-dashboard/trainer-dashboard.component';
import { TrainerCreateComponent } from './containers/trainer-create/trainer-create.component';
import { TrainerViewerComponent } from './containers/trainer-viewer/trainer-viewer.component';
// components
import { TrainerListComponent } from './components/trainer-list/trainer-list.component';
import { TrainerFormComponent } from './components/trainer-form/trainer-form.component';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    TrainerRoutingModule
  ],
  declarations: [
  TrainerDashboardComponent,
    TrainerListComponent,
  TrainerCreateComponent,
  TrainerViewerComponent,
    TrainerFormComponent
  ],
  providers: [
    TrainerService
  ]
  
})
export class TrainerModule { }
