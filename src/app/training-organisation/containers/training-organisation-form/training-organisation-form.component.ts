import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray } from '@angular/forms';

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
        id: '',
        name: '',
        typeId: ''
      }),
      trainingAddress: this.fb.group({
        firstLine: '',
        secondLine: '',
        suburb: '',
        stateId: '',
        postcode: ''
      }),
      trainingContact: this.createContact({}),
      trainingContacts: this.fb.array([])
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

  createContact(contact) {
    return this.fb.group({
      name: '',
      phoneNumber: '',
      faxNumber: '',
      email: ''
    })
  }

}