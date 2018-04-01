import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { TrainingOrganisation } from '../../models/training-organisation.interface';
import { Id } from '@app/shared/models/id.interface';

import { TrainingOrganisationService } from '../../training-organisation.service';

@Component({
  selector: 'app-training-organisation-create',
  templateUrl: './training-organisation-create.component.html',
  styleUrls: ['./training-organisation-create.component.scss']
})
export class TrainingOrganisationCreateComponent implements OnInit {
  typeIds: Id[];

  constructor(
    private router: Router,
    private orgService: TrainingOrganisationService
  ) { }

  ngOnInit() {
    this.orgService
      .getTrainingOrgTypeIds()
      .subscribe((data: Id[]) => this.typeIds = data);
  }

  viewList() {
    this.router.navigate(['training-organisations']);
  }

  createTrainingOrg(event: TrainingOrganisation) {
    this.orgService
      .createTrainingOrganisation(event)
      .subscribe(
        () => console.log('Success'),
        (error) => console.log(error),
        () => this.viewList()
      );
  }

}
