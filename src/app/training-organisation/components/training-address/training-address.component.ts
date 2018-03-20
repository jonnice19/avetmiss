import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-training-address',
  templateUrl: './training-address.component.html',
  styleUrls: ['./training-address.component.scss']
})
export class TrainingAddressComponent implements OnInit {

  @Input()
  parent: FormGroup;

  constructor() { }

  ngOnInit() {
  }

}
