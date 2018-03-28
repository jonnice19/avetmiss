import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import 'rxjs/add/operator/switchMap';

import { ProgramFormComponent } from '../../components/program-form/program-form.component';
import { Program } from '../../models/program.interface';

import { ProgramService } from '../../program.service';

@Component({
  selector: 'app-program-viewer',
  templateUrl: './program-viewer.component.html',
  styleUrls: ['./program-viewer.component.scss']
})
export class ProgramViewerComponent implements OnInit {
  program: Program;

  constructor(
    private programService: ProgramService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    this.route.params
      .switchMap((data: Program) => this.programService.getProgram(data.id))
      .subscribe((data: Program) => this.program = data);
  }

  updateProgram(program: Program) {
    this.programService
      .updateProgram(program)
      .subscribe(
        (data: Program) => this.program = Object.assign({}, this.program, program),
        (error) => console.log(error),
        () => this.router.navigate(['/programs'])
      );
  }

  deleteProgram(program: Program) {
    console.log(program);
  }
}
