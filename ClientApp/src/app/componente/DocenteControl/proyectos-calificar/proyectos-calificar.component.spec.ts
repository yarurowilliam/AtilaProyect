import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProyectosCalificarComponent } from './proyectos-calificar.component';

describe('ProyectosCalificarComponent', () => {
  let component: ProyectosCalificarComponent;
  let fixture: ComponentFixture<ProyectosCalificarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProyectosCalificarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProyectosCalificarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
