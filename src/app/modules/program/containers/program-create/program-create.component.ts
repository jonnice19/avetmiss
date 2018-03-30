import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Flag } from '@app/shared/models/flag.interface';
import { Id } from '@app/shared/models/id.interface';
import { Program } from '../../models/program.interface';

import { ProgramService } from '../../program.service';

@Component({
  selector: 'app-program-create',
  templateUrl: './program-create.component.html',
  styleUrls: ['./program-create.component.scss']
})
export class ProgramCreateComponent implements OnInit {
  recognitionIds: Id[];
  levelEducationIds: Id[];
  flags: Flag[];

  constructor(
    private programService: ProgramService,
    private router: Router
  ) { }

  ngOnInit() {
    this.programService
      .getSelectOptions()
      .subscribe(
        data => {
          this.recognitionIds = data[0];
          this.levelEducationIds = data[1];
          this.flags = data[2]
        }
      );
  }

  viewPrograms() {
    this.router.navigate(['programs']);
  }

  createProgram(event: Program) {
    this.programService
      .createProgram(event)
      .subscribe(
        () => console.log('Success'),
        () => console.log('Error'),
        () => this.viewPrograms()
      );
  }

}
