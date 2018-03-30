import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { SubjectRoutingModule } from './subject-routing.module';
// services
import { SubjectService } from './subject.service';
// containers
import { SubjectCreateComponent } from './containers/subject-create/subject-create.component';
import { SubjectDashboardComponent } from './containers/subject-dashboard/subject-dashboard.component';
import { SubjectViewerComponent } from './containers/subject-viewer/subject-viewer.component';
// components
import { SubjectFormComponent } from './components/subject-form/subject-form.component';
import { SubjectListComponent } from './components/subject-list/subject-list.component';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    SubjectRoutingModule
  ],
  declarations: [
    SubjectDashboardComponent, 
      SubjectListComponent, 
    SubjectCreateComponent, 
    SubjectViewerComponent,
      SubjectFormComponent
  ],
  providers: [SubjectService]
})
export class SubjectModule { }
