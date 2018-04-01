import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

import { TrainingOrganisation } from './models/training-organisation.interface';
import { Id } from '@app/shared/models/id.interface';

const BASE_URL = 'http://localhost:3004';
const ORG_URL = `${BASE_URL}/training-organisations`;

@Injectable()
export class TrainingOrganisationService {
  constructor(
    private http: HttpClient
  ) {}

  getTrainingOrganisations(): Observable<TrainingOrganisation[]> {
    return this.http.get<TrainingOrganisation[]>(ORG_URL);
  }

  getTrainingOrganisation(id: number): Observable<TrainingOrganisation> {
    return this.http.get<TrainingOrganisation>(`${ORG_URL}/${id}`);
  }

  createTrainingOrganisation(org: TrainingOrganisation): Observable<TrainingOrganisation> {
    return this.http.post<TrainingOrganisation>(ORG_URL, org);
  }

  updateTrainingOrganisation(org: TrainingOrganisation): Observable<TrainingOrganisation> {
    return this.http.put<TrainingOrganisation>(`${ORG_URL}/${org.id}`, org);
  }
  
  deleteTrainingOrganisation(id: number) {
    return this.http.delete(`${ORG_URL}/${id}`);
  }

  getTrainingOrgTypeIds(): Observable<Id[]> {
    return this.http.get<Id[]>(`${BASE_URL}/training-org-type-id`)
  }

}