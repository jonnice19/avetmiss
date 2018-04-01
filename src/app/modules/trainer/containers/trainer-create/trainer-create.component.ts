import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

import { Id } from '@app/shared/models/id.interface'; 
import { Trainer } from '../../models/trainer.interface';

import { TrainerService } from '../../trainer.service';

@Component({
  selector: 'app-trainer-create',
  templateUrl: './trainer-create.component.html',
  styleUrls: ['./trainer-create.component.scss']
})
export class TrainerCreateComponent implements OnInit {
  employmentTypes: Id[];

  constructor(
    private trainerService: TrainerService,
    private router: Router
  ) { }

  ngOnInit() {
    this.trainerService
      .getEmploymentTypes()
      .subscribe(
        (data: Id[]) => this.employmentTypes = data,
        () => console.log('Error'),
        () => console.log('Complete')
      );
  }

  viewList() {
    this.router.navigate(['trainers']);
  }

  createTrainer(event: Trainer) {
    this.trainerService
      .createTrainer(event)
      .subscribe(
        () => console.log('Success'),
        () => console.log('Error'),
        () => this.viewList()
      );
  }
}
