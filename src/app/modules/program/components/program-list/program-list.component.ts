import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { Program } from '../../models/program.interface';

@Component({
  selector: 'app-program-list',
  templateUrl: './program-list.component.html',
  styleUrls: ['./program-list.component.scss']
})
export class ProgramListComponent implements OnInit {
  @Input() programs: Program[]

  @Output() view: EventEmitter<number> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  onView(id: number) {
    this.view.emit(id);
  }

}
