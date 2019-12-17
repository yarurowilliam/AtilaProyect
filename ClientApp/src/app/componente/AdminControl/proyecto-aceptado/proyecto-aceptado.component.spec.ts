import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProyectoAceptadoComponent } from './proyecto-aceptado.component';

describe('ProyectoAceptadoComponent', () => {
  let component: ProyectoAceptadoComponent;
  let fixture: ComponentFixture<ProyectoAceptadoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProyectoAceptadoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProyectoAceptadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
