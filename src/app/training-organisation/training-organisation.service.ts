import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { TrainingOrganisationTypeId } from './models/training-organisation-type-id.interface';
import { TrainingOrganisation } from './models/training-organisation.interface';

const BASE_URL = 'http://localhost:3004';

@Injectable()
export class TrainingOrganisationService {
  constructor(
    private http: HttpClient
  ) {}

  getTypeIds() {
    return this.http.get<TrainingOrganisationTypeId[]>(`${BASE_URL}/training-org-type-id`);
  }

  getTrainingOrganisations() {
    return this.http.get<TrainingOrganisation[]>(`${BASE_URL}/training-organisations`);
  }
}