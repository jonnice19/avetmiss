import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { DeliveryLocation } from '../../models/delivery-location.interface';

@Component({
  selector: 'app-delivery-location-form',
  templateUrl: './delivery-location-form.component.html',
  styleUrls: ['./delivery-location-form.component.scss']
})
export class DeliveryLocationFormComponent implements OnInit {
  deliveryLocationForm: FormGroup;

  @Input() deliveryLocation: DeliveryLocation;

  @Output() delete: EventEmitter<number> = new EventEmitter();
  @Output() view: EventEmitter<any> = new EventEmitter();
  @Output() submitted: EventEmitter<DeliveryLocation> = new EventEmitter();

  constructor(
    private fb: FormBuilder,
    private router: Router
  ) { }

  ngOnInit() {
    this.deliveryLocationForm = this.fb.group({
      id: [null, [Validators.required]],
      name: [null, [Validators.required]],
      suburb: [null, [Validators.required]],
      stateId: [null, [Validators.required]],
      postcode: [null, [Validators.required]],
      countryId: [null, [Validators.required]]
    })

    if (this.deliveryLocation !== undefined) {
      this.assignDetailToForm();
    }
  }

  assignDetailToForm() {
    const detail: DeliveryLocation = this.deliveryLocation;
    this.deliveryLocationForm.controls['id'].setValue(detail.id);
    this.deliveryLocationForm.controls['name'].setValue(detail.name);
    this.deliveryLocationForm.controls['suburb'].setValue(detail.suburb);
    this.deliveryLocationForm.controls['stateId'].setValue(detail.stateId);
    this.deliveryLocationForm.controls['postcode'].setValue(detail.postcode);
    this.deliveryLocationForm.controls['countryId'].setValue(detail.countryId);
  }

  onView() {
    this.view.emit();
  }

  onSubmit(value: DeliveryLocation) {
    this.submitted.emit(value);
  }

  onDelete() {
    this.delete.emit(this.deliveryLocation.id);
  }

}
