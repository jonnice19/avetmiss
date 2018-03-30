import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/forkJoin';

import { Program } from './models/program.interface';
import { Flag } from '@app/shared/models/flag.interface';
import { Id } from '@app/shared/models/id.interface';

const BASE_URL = 'http://localhost:3004';
const PROGRAM_URL = `${BASE_URL}/programs`;

@Injectable()
export class ProgramService {
  constructor(
    private http: HttpClient
  ) {}

  getPrograms(): Observable<Program[]> {
    return this.http.get<Program[]>(PROGRAM_URL);
  }

  getProgram(id: number): Observable<Program> {
    return this.http.get<Program>(`${PROGRAM_URL}/${id}`);
  }

  createProgram(program: Program): Observable<Program> {
    return this.http.post<Program>(PROGRAM_URL, program);
  }

  updateProgram(program: Program): Observable<Program> {
    return this.http.put<Program>(`${PROGRAM_URL}/${program.id}`, program);
  }

  deleteProgram(id: number) {
    return this.http.delete(`${PROGRAM_URL}/${id}`);
  }

  getSelectOptions() {
    return Observable.forkJoin(
      this.http.get<Id[]>(`${BASE_URL}/programs-recognition-id`),
      this.http.get<Id[]>(`${BASE_URL}/level-of-educ-id`),
      this.http.get<Flag[]>(`${BASE_URL}/vet-flag`)
    );
  }


}