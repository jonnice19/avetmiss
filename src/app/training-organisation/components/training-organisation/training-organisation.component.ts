import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { TrainingOrganisationTypeId } from '../../models/training-organisation-type-id.interface';

@Component({
  selector: 'app-training-organisation',
  templateUrl: './training-organisation.component.html',
  styleUrls: ['./training-organisation.component.scss']
})
export class TrainingOrganisationComponent implements OnInit {

  @Input() parent: FormGroup;
  @Input() trainingOrganisationTypeIds: TrainingOrganisationTypeId[];

  constructor() { }

  ngOnInit() {
  }

}
