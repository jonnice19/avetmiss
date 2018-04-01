import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { Trainer } from '../../models/trainer.interface';
import { Id } from '@app/shared/models/id.interface'; 

import { TrainerService } from '../../trainer.service';

@Component({
  selector: 'app-trainer-form',
  templateUrl: './trainer-form.component.html',
  styleUrls: ['./trainer-form.component.scss']
})
export class TrainerFormComponent implements OnInit {
  trainerForm: FormGroup;
  @Input() trainer: Trainer;
  @Input() employmentTypes: Id[];

  @Output() remove: EventEmitter<number> = new EventEmitter();
  @Output() view: EventEmitter<any> = new EventEmitter();
  @Output() submitted: EventEmitter<Trainer> = new EventEmitter();

  constructor(
    private fb: FormBuilder,
    private trainerService: TrainerService,
    private router: Router
  ) { }

  ngOnInit() {
    this.trainerService
      .getEmploymentTypes()
      .subscribe(
        (data: Id[]) => this.employmentTypes = data,
        () => console.log('Error'),
        () => console.log('Complete')
      );

    this.trainerForm = this.fb.group({
      id: [null, [Validators.required]],
      firstName: [null, [Validators.required]],
      lastName: [null, [Validators.required]],
      contactNumber: [null, [Validators.required]],
      employment: [-1, [Validators.required]],
    });

    if (this.trainer !== undefined) {
      this.assignDetailToForm();
    }
  }

  assignDetailToForm() {
    const detail: Trainer = this.trainer;
    this.trainerForm.controls['id'].setValue(detail.id);
    this.trainerForm.controls['firstName'].setValue(detail.firstName);
    this.trainerForm.controls['lastName'].setValue(detail.lastName);
    this.trainerForm.controls['contactNumber'].setValue(detail.contactNumber);
    this.trainerForm.controls['employment'].setValue(detail.employment);
  }

  onView() {
    this.view.emit();
  }
  
  onDelete() {
    this.remove.emit(this.trainer.id);
  }

  onSubmit(trainer: Trainer) {
    this.submitted.emit(trainer);
  }

}
