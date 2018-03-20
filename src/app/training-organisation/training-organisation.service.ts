import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { TrainingOrganisationTypeId } from './models/training-organisation-type-id.interface';

const TRAINING_ORGANISATION_API = 'http://localhost:3004/training-org-type-id';

@Injectable()
export class TrainingOrganisationService {
  constructor(
    private http: HttpClient
  ) {}

  getTypeIds() {
    return this.http.get<TrainingOrganisationTypeId[]>(TRAINING_ORGANISATION_API)
  }
}