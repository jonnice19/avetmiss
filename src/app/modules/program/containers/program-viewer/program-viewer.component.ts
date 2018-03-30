import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import 'rxjs/add/operator/switchMap';

import { Program } from '../../models/program.interface';
import { Flag } from '@app/shared/models/flag.interface';
import { Id } from '@app/shared/models/id.interface';

import { ProgramService } from '../../program.service';

@Component({
  selector: 'app-program-viewer',
  templateUrl: './program-viewer.component.html',
  styleUrls: ['./program-viewer.component.scss']
})
export class ProgramViewerComponent implements OnInit {
  program: Program;
  recognitionIds: Id[];
  levelEducationIds: Id[];
  flags: Flag[];

  constructor(
    private programService: ProgramService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    this.route.params
      .switchMap((data: Program) => this.programService.getProgram(data.id))
      .subscribe((data: Program) => this.program = data);

    // Get Select Options
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

  viewList() {
    this.router.navigate(['programs']);
  }

  updateProgram(event: Program) {
    this.programService
      .updateProgram(event)
      .subscribe(
        () => this.program = Object.assign({}, event),
        () => console.log('Error'),
        () => console.log('Complete')
      )
  }

  removeProgram(event: number) {
    this.programService
      .deleteProgram(event)
      .subscribe(
        () => console.log('Success'),
        () => console.log('Error'),
        () => this.viewList()
      );
  }

}
