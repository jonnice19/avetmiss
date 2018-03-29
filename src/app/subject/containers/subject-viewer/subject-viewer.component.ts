import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import 'rxjs/add/operator/switchMap';

import { SubjectFormComponent } from '../../components/subject-form/subject-form.component';

import { Subject } from '../../models/subject.interface';
import { Flag } from '@app/shared/models/flag.interface';

import { SubjectService } from '../../subject.service';

@Component({
  selector: 'app-subject-viewer',
  templateUrl: './subject-viewer.component.html',
  styleUrls: ['./subject-viewer.component.scss']
})
export class SubjectViewerComponent implements OnInit {
  subject: Subject;
  flags: Flag[];
  vetFlags: Flag[];

  constructor(
    private subjectService: SubjectService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {

    this.route.params
      .switchMap((data: Subject) => this.subjectService.getSubject(data.id))
      .subscribe((data: Subject) => this.subject = data);    

    // Get Select Options
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

  updateSubject(event: Subject) {
    this.subjectService
      .updateSubject(event)
      .subscribe(
        () => this.subject = Object.assign({}, event),
        () => console.log('Error'),
        () => console.log('Complete')
      );
  }

  removeSubject(event: Subject) {
    this.subjectService
      .removeSubject(event.id)
      .subscribe(
        () => console.log('Success'),
        () => console.log('Error'),
        () => this.router.navigate(['subjects'])
      )
  }

}
