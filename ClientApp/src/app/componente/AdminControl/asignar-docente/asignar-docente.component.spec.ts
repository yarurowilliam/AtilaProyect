import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AsignarDocenteComponent } from './asignar-docente.component';

describe('AsignarDocenteComponent', () => {
  let component: AsignarDocenteComponent;
  let fixture: ComponentFixture<AsignarDocenteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AsignarDocenteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AsignarDocenteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
