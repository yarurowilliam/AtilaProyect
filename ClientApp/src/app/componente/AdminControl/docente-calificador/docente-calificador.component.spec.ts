import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DocenteCalificadorComponent } from './docente-calificador.component';

describe('DocenteCalificadorComponent', () => {
  let component: DocenteCalificadorComponent;
  let fixture: ComponentFixture<DocenteCalificadorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DocenteCalificadorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DocenteCalificadorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
