import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/forkJoin';

import { Flag } from '@app/shared/models/flag.interface';
import { Subject } from './models/subject.interface';

const BASE_URL = 'http://localhost:3004';

@Injectable()
export class SubjectService {
  constructor(private http: HttpClient) {}

  getSubjects(): Observable<Subject[]> {
    return this.http.get<Subject[]>(`${BASE_URL}/subjects`);
  }

  getSubject(id: number): Observable<Subject> {
    return this.http.get<Subject>(`${BASE_URL}/subjects/${id}`);
  }

  createSubject(subject: Subject): Observable<Subject> {
    return this.http.post<Subject>(`${BASE_URL}/subjects`, subject);
  }

  updateSubject(subject: Subject): Observable<Subject> {
    return this.http.put<Subject>(`${BASE_URL}/subjects/${subject.id}`, subject);
  }

  removeSubject(id: number) {
    return this.http.delete(`${BASE_URL}/subjects/${id}`);
  }

  getSelectOptions() {
    return Observable.forkJoin(
      this.http.get<Flag[]>(`${BASE_URL}/subjectFlag`),
      this.http.get<Flag[]>(`${BASE_URL}/vet-flag`)
    );
  }
}
