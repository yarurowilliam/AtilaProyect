import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AgregarCalificacionComponent } from './agregar-calificacion.component';

describe('AgregarCalificacionComponent', () => {
  let component: AgregarCalificacionComponent;
  let fixture: ComponentFixture<AgregarCalificacionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AgregarCalificacionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AgregarCalificacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
