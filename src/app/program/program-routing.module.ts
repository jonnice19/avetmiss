import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ProgramDashboardComponent } from 
'./containers/program-dashboard/program-dashboard.component';
import { ProgramCreateComponent } from 
'./containers/program-create/program-create.component';
import { ProgramViewerComponent } from 
'./containers/program-viewer/program-viewer.component';

const routes: Routes = [
  { path: '', component: ProgramDashboardComponent, pathMatch: 'full'},
  { path: 'create', component: ProgramCreateComponent },
  { path: 'detail/:id', component: ProgramViewerComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProgramRoutingModule {}