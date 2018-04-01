import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrainerViewerComponent } from './trainer-viewer.component';

describe('TrainerViewerComponent', () => {
  let component: TrainerViewerComponent;
  let fixture: ComponentFixture<TrainerViewerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrainerViewerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrainerViewerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
