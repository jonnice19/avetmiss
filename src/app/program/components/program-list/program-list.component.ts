import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { Program } from '../../models/program.interface';

@Component({
  selector: 'app-program-list',
  templateUrl: './program-list.component.html',
  styleUrls: ['./program-list.component.scss']
})
export class ProgramListComponent implements OnInit {
  @Input()
  programs: Program[];

  @Output()
  view: EventEmitter<Program> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  goToProgram(program: Program) {
    this.view.emit(program)
  }

}
