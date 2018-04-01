import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Trainer } from '../../models/trainer.interface';

import { TrainerService } from '../../trainer.service';

@Component({
  selector: 'app-trainer-dashboard',
  templateUrl: './trainer-dashboard.component.html',
  styleUrls: ['./trainer-dashboard.component.scss']
})
export class TrainerDashboardComponent implements OnInit {
  title: string = 'Trainers';
  trainers: Trainer[];

  constructor(
    private trainerService: TrainerService,
    private router: Router
  ) { }

  ngOnInit() {
    this.trainerService
      .getTrainers()
      .subscribe(
        (data: Trainer[]) => this.trainers = data,
        () => console.log('Error'),
        () => console.log('Complete')
      );
  }

  viewDetail(id: number) {
    this.router.navigate(['trainers/detail', id]);
  }
  
}

