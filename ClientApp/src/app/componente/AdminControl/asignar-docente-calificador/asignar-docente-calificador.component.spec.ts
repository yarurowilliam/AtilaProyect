import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AsignarDocenteCalificadorComponent } from './asignar-docente-calificador.component';

describe('AsignarDocenteCalificadorComponent', () => {
  let component: AsignarDocenteCalificadorComponent;
  let fixture: ComponentFixture<AsignarDocenteCalificadorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AsignarDocenteCalificadorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AsignarDocenteCalificadorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
