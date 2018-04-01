import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TrainerDashboardComponent } from './containers/trainer-dashboard/trainer-dashboard.component';
import { TrainerCreateComponent } from './containers/trainer-create/trainer-create.component';
import { TrainerViewerComponent } from './containers/trainer-viewer/trainer-viewer.component';

const routes: Routes = [
  { path: '', component: TrainerDashboardComponent, pathMatch: 'full' },
  { path: 'create', component: TrainerCreateComponent },
  { path: 'detail/:id', component: TrainerViewerComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TrainerRoutingModule {}