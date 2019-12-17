import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DocenteCalificadorModalComponent } from './docente-calificador-modal.component';

describe('DocenteCalificadorModalComponent', () => {
  let component: DocenteCalificadorModalComponent;
  let fixture: ComponentFixture<DocenteCalificadorModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DocenteCalificadorModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DocenteCalificadorModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
