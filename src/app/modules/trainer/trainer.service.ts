import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

import { Trainer } from './models/trainer.interface';
import { Id } from '@app/shared/models/id.interface';

const BASE_URL = 'http://localhost:3004';
const TRAINER_URL = `${BASE_URL}/trainers`;

@Injectable()
export class TrainerService {
  constructor(
    private http: HttpClient
  ) {}

  getTrainers(): Observable<Trainer[]> {
    return this.http.get<Trainer[]>(TRAINER_URL);
  }

  getTrainer(id: number): Observable<Trainer> {
    return this.http.get<Trainer>(`${TRAINER_URL}/${id}`);
  }

  createTrainer(trainer: Trainer): Observable<Trainer> {
    return this.http.post<Trainer>(TRAINER_URL, trainer);
  }

  updateTrainer(trainer: Trainer): Observable<Trainer> {
    return this.http.put<Trainer>(`${TRAINER_URL}/${trainer.id}`, trainer);
  }

  deleteTrainer(id: number) {
    return this.http.delete(`${TRAINER_URL}/${id}`);
  }

  getEmploymentTypes(): Observable<Id[]> {
    return this.http.get<Id[]>(`${BASE_URL}/employment-types`);
  }
}