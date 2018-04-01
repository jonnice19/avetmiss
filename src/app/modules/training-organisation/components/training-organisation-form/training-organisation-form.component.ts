import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { TrainingOrganisation } from '../../models/training-organisation.interface';
import { Id } from '@app/shared/models/id.interface';

@Component({
  selector: 'app-training-organisation-form',
  templateUrl: './training-organisation-form.component.html',
  styleUrls: ['./training-organisation-form.component.scss']
})
export class TrainingOrganisationFormComponent implements OnInit {
  orgForm: FormGroup;
  @Input() trainingOrg: TrainingOrganisation;
  @Input() typeIds: Id[];

  @Output() remove: EventEmitter<number> = new EventEmitter();
  @Output() view: EventEmitter<any> = new EventEmitter();
  @Output() submitted: EventEmitter<TrainingOrganisation> = new EventEmitter();

  constructor(
    private fb: FormBuilder
  ) { }

  ngOnInit() {
    this.orgForm = this.fb.group({
      id: [null, [Validators.required]],
      name: [null, [Validators.required]],
      typeId: [-1, [Validators.required]],
      addressFirstLine: [null, [Validators.required]],
      addressSecondLine: [null, [Validators.required]],
      addresSuburb: [null, [Validators.required]],
      addressStateId: [null, [Validators.required]],
      addressPostCode: [null, [Validators.required]],
      contactName: [null, [Validators.required]],
      contactNumber: [null, [Validators.required]],
      contactFax: [null, [Validators.required]],
      contactEmail: [null, [Validators.required]]
    });
  }

  onView() {
    this.view.emit();
  }

  onDelete() {
    this.remove.emit(this.trainingOrg.id);
  }

  onSubmit(value: TrainingOrganisation) {
    this.submitted.emit(value);
  }

}
