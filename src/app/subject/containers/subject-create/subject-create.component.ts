import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Subject } from '../../models/subject.interface';
import { Flag } from '@app/shared/models/flag.interface';

import { SubjectService } from '../../subject.service';

@Component({
  selector: 'app-subject-create',
  templateUrl: './subject-create.component.html',
  styleUrls: ['./subject-create.component.scss']
})
export class SubjectCreateComponent implements OnInit {
  flags: Flag[];
  vetFlags: Flag[];

  constructor(
    private subjectService: SubjectService,
    private router: Router
  ) { }

  ngOnInit() {
    this.subjectService
      .getSelectOptions()
      .subscribe(
        data => {
          this.flags = data[0];
          this.vetFlags = data[1];
        }
      );
  }

  viewList() {
    this.router.navigate(['subjects']);
  }

  createSubject(event: Subject) {
    this.subjectService
      .createSubject(event)
      .subscribe(
        () => console.log('Success'),
        () => console.log('Error'),
        () => this.router.navigate(['subjects'])
      );
  }

}
