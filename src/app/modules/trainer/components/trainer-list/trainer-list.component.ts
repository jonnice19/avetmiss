import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { Trainer } from '../../models/trainer.interface';

@Component({
  selector: 'app-trainer-list',
  templateUrl: './trainer-list.component.html',
  styleUrls: ['./trainer-list.component.scss']
})
export class TrainerListComponent implements OnInit {
  @Input() trainers: Trainer[];

  @Output() view: EventEmitter<number> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  onView(id: number) {
    this.view.emit(id);
  }

}
