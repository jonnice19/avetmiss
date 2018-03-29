import { Component, OnInit } from '@angular/core';

import { Id } from '@app/shared/models/id.interface';
import { Flag } from '@app/shared/models/flag.interface';

import { ProgramService } from '../../program.service';

@Component({
  selector: 'app-program-create',
  templateUrl: './program-create.component.html',
  styleUrls: ['./program-create.component.scss']
})
export class ProgramCreateComponent implements OnInit {
  programIds: Id[];
  levelEducIds: Id[];
  vetFlags: Flag[];

  constructor(
    private programService: ProgramService
  ) { }

  ngOnInit() {
    this.programService
      .getSelectOptions()
      .subscribe(
        data => {
          this.programIds = data[0];
          this.levelEducIds = data[1];
          this.vetFlags = data[2];
        }
      )
  }

}
