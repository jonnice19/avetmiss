import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Subject } from '../../models/subject.interface';

import { SubjectService } from '../../subject.service'; 

@Component({
  selector: 'app-subject-dashboard',
  templateUrl: './subject-dashboard.component.html',
  styleUrls: ['./subject-dashboard.component.scss']
})
export class SubjectDashboardComponent implements OnInit {
  title: string = 'Subjects';
  subjects: Subject[];
  constructor(
    private subjectService: SubjectService,
    private router: Router
  ) { }

  ngOnInit() {
    this.subjectService
      .getSubjects()
      .subscribe(
        (data: Subject[]) => this.subjects = data
      );
  }

  viewDetail(event: number) {
    this.router.navigate(['subjects/detail', event]);
  }

}
