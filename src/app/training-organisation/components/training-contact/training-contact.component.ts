import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-training-contact',
  templateUrl: './training-contact.component.html',
  styleUrls: ['./training-contact.component.scss']
})
export class TrainingContactComponent implements OnInit {

  @Input()
  parent: FormGroup;

  constructor() { }

  ngOnInit() {
  }

}
