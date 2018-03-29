import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SubjectDashboardComponent } from './containers/subject-dashboard/subject-dashboard.component';
import { SubjectCreateComponent } from './containers/subject-create/subject-create.component';
import { SubjectViewerComponent } from './containers/subject-viewer/subject-viewer.component';

const routes: Routes = [
  { path: '', component: SubjectDashboardComponent, pathMatch: 'full' },
  { path: 'create', component: SubjectCreateComponent },
  { path: 'detail/:id', component: SubjectViewerComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SubjectRoutingModule {}