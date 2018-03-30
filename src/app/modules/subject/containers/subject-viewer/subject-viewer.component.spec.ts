import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubjectViewerComponent } from './subject-viewer.component';

describe('SubjectViewerComponent', () => {
  let component: SubjectViewerComponent;
  let fixture: ComponentFixture<SubjectViewerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubjectViewerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubjectViewerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
