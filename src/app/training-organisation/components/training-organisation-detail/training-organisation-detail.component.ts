import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-training-organisation-detail',
  templateUrl: './training-organisation-detail.component.html',
  styleUrls: ['./training-organisation-detail.component.scss']
})
export class TrainingOrganisationDetailComponent implements OnInit {

  constructor(
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    console.log(this.route.snapshot.params['id']);
  }

}
