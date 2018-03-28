import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Program } from '../../models/program.interface';

import { ProgramService } from '../../program.service';

@Component({
  selector: 'app-program-dashboard',
  templateUrl: './program-dashboard.component.html',
  styleUrls: ['./program-dashboard.component.scss']
})
export class ProgramDashboardComponent implements OnInit {
  title: string = 'Programs';
  programs: Program[];

  constructor(
    private programService: ProgramService,
    private router: Router
  ) { }

  ngOnInit() {
    this.programService.getPrograms()
      .subscribe(
        (data: Program[]) => this.programs = data
      );
  }

  viewProgram(program: Program) {
    this.router.navigate(['/programs/detail', program.id]);
  }  

}
