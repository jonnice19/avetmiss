import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { TrainingOrganisation } from '../../models/training-organisation.interface';

@Component({
  selector: 'app-training-organisation-list',
  templateUrl: './training-organisation-list.component.html',
  styleUrls: ['./training-organisation-list.component.scss']
})
export class TrainingOrganisationListComponent implements OnInit {
  @Input() trainingOrgs: TrainingOrganisation[];

  @Output() view: EventEmitter<number> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  onView(id: number) {
    this.view.emit(id);
  }

}
