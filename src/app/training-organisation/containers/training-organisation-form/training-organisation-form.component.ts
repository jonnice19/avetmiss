import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, Validators } from '@angular/forms';

import { TrainingOrganisationTypeId } from '../../models/training-organisation-type-id.interface';

import{ TrainingOrganisationService } from '../../training-organisation.service';

@Component({
  selector: 'app-training-organisation-form',
  templateUrl: './training-organisation-form.component.html',
  styleUrls: ['./training-organisation-form.component.scss']
})
export class TrainingOrganisationFormComponent implements OnInit {

  trainingOrganisationForm: FormGroup;
  trainingOrganisationTypeIds: TrainingOrganisationTypeId[];

  constructor(
    private fb: FormBuilder,
    private trainingOrgTypeIdService: TrainingOrganisationService
  ) { }

  ngOnInit() {
    this.trainingOrganisationForm = this.fb.group({
      trainingOrganisation: this.fb.group({
        id: ['', [Validators.required]],
        name: ['', [Validators.required]],
        typeId: ['', [Validators.required]]
      }),
      trainingAddress: this.fb.group({
        firstLine: ['', [Validators.required]],
        secondLine: '',
        suburb: ['', [Validators.required]],
        stateId: '',
        postcode: ''
      }),
      trainingContact: this.fb.group({
        contactName: ['', [Validators.required]],
        phoneNumber: ['', [Validators.min(10), Validators.max(10)]],
        faxNumber: '',
        email: ['', [Validators.email]]
      })
    });

    this.getTypeIds();
  }

  getTypeIds() {
    this.trainingOrgTypeIdService
      .getTypeIds()
      .subscribe(
        ((data: TrainingOrganisationTypeId[]) => this.trainingOrganisationTypeIds = data)
      );
  }

  onSubmit() {
    console.log(this.trainingOrganisationForm.value);
  }
}
