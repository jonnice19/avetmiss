import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { Subject } from '../../models/subject.interface';
import { Flag } from '@app/shared/models/flag.interface';

@Component({
  selector: 'app-subject-form',
  templateUrl: './subject-form.component.html',
  styleUrls: ['./subject-form.component.scss']
})
export class SubjectFormComponent implements OnInit {
  subjectForm: FormGroup;
  @Input() flags: Flag[];
  @Input() vetFlags: Flag[];
  @Input() subject: Subject;

  @Output() submitted: EventEmitter<Subject> = new EventEmitter();
  @Output() remove: EventEmitter<Subject> = new EventEmitter();
  @Output() view: EventEmitter<any> = new EventEmitter();  

  constructor(
    private fb: FormBuilder
  ) { }

  ngOnInit() {
    // Build Form
    this.subjectForm = this.fb.group({
      id: [null, [Validators.required]],
      name: [null, [Validators.required]],
      flag: [-1, [Validators.required]],
      educId: [null, [Validators.required]],
      hours: [null, [Validators.required]],
      vetFlag: [-1, [Validators.required]]
    });

    // Assign Detail to Form
    // IF subject has value
    if (this.subject) {
      this.assignDetailToForm();
    }
  }

  assignDetailToForm() {
    const detail: Subject = this.subject;
    this.subjectForm.controls['id'].setValue(detail.id);
    this.subjectForm.controls['name'].setValue(detail.name);
    this.subjectForm.controls['flag'].setValue(detail.flag);
    this.subjectForm.controls['educId'].setValue(detail.educId);
    this.subjectForm.controls['hours'].setValue(detail.hours);
    this.subjectForm.controls['vetFlag'].setValue(detail.vetFlag);
  }

  handleView() {
    this.view.emit();
  }

  onSubmit(value: Subject) {
    this.submitted.emit(value);
  }

  onDelete() {
    this.remove.emit(this.subject);
  }  

}
