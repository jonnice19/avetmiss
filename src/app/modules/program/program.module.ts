import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { ProgramRoutingModule } from './program-routing.module';
// services
import { ProgramService } from './program.service';
// containers
import { ProgramDashboardComponent } from './containers/program-dashboard/program-dashboard.component';
import { ProgramViewerComponent } from './containers/program-viewer/program-viewer.component';
import { ProgramCreateComponent } from './containers/program-create/program-create.component';
// components
import { ProgramListComponent } from './components/program-list/program-list.component';
import { ProgramFormComponent } from './components/program-form/program-form.component';

@NgModule({
  imports: [
    CommonModule,
    ProgramRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [
    ProgramDashboardComponent, 
      ProgramListComponent, 
    ProgramViewerComponent, 
    ProgramCreateComponent,
      ProgramFormComponent
  ],
  providers: [ProgramService]
})
export class ProgramModule { }
