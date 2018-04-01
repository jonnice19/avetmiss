import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import 'rxjs/add/operator/switchMap';

import { Trainer } from '../../models/trainer.interface';
import { Id } from '@app/shared/models/id.interface';

import { TrainerService } from '../../trainer.service';

@Component({
  selector: 'app-trainer-viewer',
  templateUrl: './trainer-viewer.component.html',
  styleUrls: ['./trainer-viewer.component.scss']
})
export class TrainerViewerComponent implements OnInit {
  trainer: Trainer;
  employmentTypes: Id[];

  constructor(
    private trainerService: TrainerService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.route.params
      .switchMap((data: Trainer) => this.trainerService.getTrainer(data.id))
      .subscribe((data: Trainer) => this.trainer = data);

    this.trainerService
      .getEmploymentTypes()
      .subscribe((data: Id[]) => this.employmentTypes = data);
  }

  viewList() {
    this.router.navigate(['trainers']);
  }

  updateSubject(event: Trainer) {
    this.trainerService
      .updateTrainer(event)
      .subscribe(
        (data: Trainer) => this.trainer = Object.assign({}, event),
        () => console.log('Error'),
        () => console.log('Complete')
      );
  }

  removeSubject(event: number) {
    this.trainerService
      .deleteTrainer(event)
      .subscribe(
        () => console.log('Success'),
        () => console.log('Error'),
        () => this.viewList()
      );
  }

}
