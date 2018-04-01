import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { TrainingOrganisation } from '../../models/training-organisation.interface';

import { TrainingOrganisationService } from '../../training-organisation.service';

@Component({
  selector: 'app-training-organisation-dashboard',
  templateUrl: './training-organisation-dashboard.component.html',
  styleUrls: ['./training-organisation-dashboard.component.scss']
})
export class TrainingOrganisationDashboardComponent implements OnInit {
  title: string = 'Training Organisations'
  trainingOrgs: TrainingOrganisation[];

  constructor(
    private router: Router,
    private orgService: TrainingOrganisationService
  ) { }

  ngOnInit() {
    this.orgService
      .getTrainingOrganisations()
      .subscribe((data: TrainingOrganisation[]) => this.trainingOrgs = data);
  }

  viewDetail(event: number) {
    this.router.navigate(['training-organisations/detail', event]);
  }

}
