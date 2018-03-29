import { Component, OnInit, Input, Output, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { Program } from '../../models/program.interface';
import { Id } from '@app/shared/models/id.interface';
import { Flag } from '@app/shared/models/flag.interface';

import { ProgramService } from '../../program.service';

@Component({
  selector: 'app-program-form',
  templateUrl: './program-form.component.html',
  styleUrls: ['./program-form.component.scss']
})
export class ProgramFormComponent implements OnInit, OnChanges {

  programForm: FormGroup;

  @Input() program: Program;
  @Input() programIds: Id[];
  @Input() levelEducIds: Id[];
  @Input() vetFlags: Flag[];

  @Output() submitted: EventEmitter<Program> = new EventEmitter();
  @Output() remove: EventEmitter<Program> = new EventEmitter();

  constructor(
    private fb: FormBuilder,
    private programService: ProgramService
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
    })
  }

  ngOnChanges(changes: SimpleChanges) {
    if (!changes.program.isFirstChange()) {
      this.program = Object.assign({}, changes.program.currentValue);
      this.assignDetailValue();
    }
  }

  assignDetailValue() {
    const program = this.program
    this.programForm.controls['id'].setValue(program.id);
    this.programForm.controls['name'].setValue(program.name);
    this.programForm.controls['recognitionId'].setValue(program.recognitionId);
    this.programForm.controls['levelEducationId'].setValue(program.levelEducationId);
    this.programForm.controls['fieldEducationId'].setValue(program.fieldEducationId);
    this.programForm.controls['anzscoId'].setValue(program.anzscoId);
    this.programForm.controls['nominalHours'].setValue(program.nominalHours);
    this.programForm.controls['flag'].setValue(program.flag);
  }

  onSubmit(program: Program) {
    this.submitted.emit(program);
  }

  onDelete() {
    this.remove.emit(this.program);
  }

}
