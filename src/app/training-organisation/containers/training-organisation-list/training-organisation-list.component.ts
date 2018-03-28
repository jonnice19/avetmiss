import { Component, OnInit } from '@angular/core';

import { TrainingOrganisation } from '../../models/training-organisation.interface';

import { TrainingOrganisationService } from '../../training-organisation.service';

@Component({
  selector: 'app-training-organisation-list',
  templateUrl: './training-organisation-list.component.html',
  styleUrls: ['./training-organisation-list.component.scss']
})
export class TrainingOrganisationListComponent implements OnInit {

  trainingOrganisations: TrainingOrganisation[];

  constructor(
    private trainingOrgService: TrainingOrganisationService
  ) { }

  ngOnInit() {
    this.getTrainingOrganisation();
  }

  getTrainingOrganisation() {
    this.trainingOrgService
      .getTrainingOrganisations()
      .subscribe(
        ((data : TrainingOrganisation[]) => this.trainingOrganisations = data)
    );
  }

}
