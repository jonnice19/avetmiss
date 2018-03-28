import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
// Routing
import { ProgramRoutingModule } from './program-routing.module';
// Container
import { ProgramDashboardComponent } from 
'./containers/program-dashboard/program-dashboard.component';
import { ProgramViewerComponent } from 
'./containers/program-viewer/program-viewer.component';
import { ProgramCreateComponent } from 
'./containers/program-create/program-create.component';
// Component
import { ProgramListComponent } from 
'./components/program-list/program-list.component';
import { ProgramFormComponent } from 
'./components/program-form/program-form.component';
// Service
import { ProgramService } from './program.service';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    ProgramRoutingModule
  ],
  declarations: [
    ProgramDashboardComponent, 
    ProgramViewerComponent, 
    ProgramListComponent, 
    ProgramFormComponent, 
    ProgramCreateComponent
  ],
  entryComponents: [ProgramFormComponent],
  providers: [ProgramService]
})
export class ProgramModule { }
