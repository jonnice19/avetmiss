import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/forkJoin';

import { Program } from './models/program.interface';
import { Id } from '@app/shared/models/id.interface';
import { Flag } from '@app/shared/models/flag.interface';

const BASE_URL = 'http://localhost:3004';

@Injectable()
export class ProgramService {
  constructor(
    private http: HttpClient
  ) {}

  getPrograms() {
    return this.http.get<Program[]>(`${BASE_URL}/programs`);
  }

  getProgram(id: number) {
    return this.http.get<Program>(`${BASE_URL}/programs/${id}`);
  }

  updateProgram(program: Program) {
    return this.http.put(`${BASE_URL}/programs/${program.id}`, program);
  }

  removeProgram(program: Program) {
    return this.http.delete(`${BASE_URL}/programs/${program.id}`);
  }

  getSelectOptions() {
    return Observable.forkJoin(
      this.http.get<Id[]>(`${BASE_URL}/programs-recognition-id`),
      this.http.get<Id[]>(`${BASE_URL}/level-of-educ-id`),
      this.http.get<Flag[]>(`${BASE_URL}/vet-flag`)
    );
  }
}
