import { Component, OnInit, Input } from '@angular/core';

import { TrainingOrganisation } from '../../models/training-organisation.interface';

@Component({
  selector: 'app-training-organisation-table',
  templateUrl: './training-organisation-table.component.html',
  styleUrls: ['./training-organisation-table.component.scss']
})
export class TrainingOrganisationTableComponent implements OnInit {

  @Input()
  trainingOrganisations: TrainingOrganisation[];

  constructor() { }

  ngOnInit() {
  }

}
