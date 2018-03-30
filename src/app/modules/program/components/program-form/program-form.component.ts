import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { Flag } from '@app/shared/models/flag.interface';
import { Id } from '@app/shared/models/id.interface';
import { Program } from '../../models/program.interface';

@Component({
  selector: 'app-program-form',
  templateUrl: './program-form.component.html',
  styleUrls: ['./program-form.component.scss']
})
export class ProgramFormComponent implements OnInit {
  programForm: FormGroup;
  @Input() program: Program;
  @Input() recognitionIds: Id[];
  @Input() levelEducationIds: Id[];
  @Input() flags: Flag[];

  @Output() view: EventEmitter<any> = new EventEmitter();
  @Output() submitted: EventEmitter<Program> = new EventEmitter();
  @Output() remove: EventEmitter<number> = new EventEmitter();

  constructor(
    private fb: FormBuilder
  ) { }

  ngOnInit() {
    this.programForm = this.fb.group({
      id: [null, [Validators.required]],
      name: [null, [Validators.required]],
      recognitionId: [-1, [Validators.required]],
      levelEducationId: [-1, [Validators.required]],
      fieldEducationId: [null, [Validators.required]],
      anzscoId: [null, [Validators.required]],
      nominalHours: [null, [Validators.required]],
      flag: [-1, [Validators.required]]
    });

    if (this.program !== undefined) {
      this.assignDetailToForm();
    }
  }

  assignDetailToForm() {
    const detail: Program = this.program;
    this.programForm.controls['id'].setValue(detail.id);
    this.programForm.controls['name'].setValue(detail.name);
    this.programForm.controls['recognitionId'].setValue(detail.recognitionId);
    this.programForm.controls['levelEducationId'].setValue(detail.levelEducationId);
    this.programForm.controls['fieldEducationId'].setValue(detail.fieldEducationId);
    this.programForm.controls['anzscoId'].setValue(detail.anzscoId);
    this.programForm.controls['nominalHours'].setValue(detail.nominalHours);
    this.programForm.controls['flag'].setValue(detail.flag);
  }

  onView() {
    this.view.emit();
  }

  onSubmit(value: Program) {
    this.submitted.emit(value);
  }

  onDelete() {
    this.remove.emit(this.program.id);
  }

}
