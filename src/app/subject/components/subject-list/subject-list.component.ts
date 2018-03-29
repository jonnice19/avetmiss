import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Subject } from '../../models/subject.interface';

@Component({
  selector: 'app-subject-list',
  templateUrl: './subject-list.component.html',
  styleUrls: ['./subject-list.component.scss']
})
export class SubjectListComponent implements OnInit {
  @Input() subjects: Subject[];

  @Output() view: EventEmitter<number> = new EventEmitter();
  
  constructor() { }

  ngOnInit() {
  }

  handleView(id: number) {
    this.view.emit(id);
  }

}
