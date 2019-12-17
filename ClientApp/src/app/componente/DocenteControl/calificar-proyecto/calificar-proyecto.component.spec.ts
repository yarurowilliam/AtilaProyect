import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CalificarProyectoComponent } from './calificar-proyecto.component';

describe('CalificarProyectoComponent', () => {
  let component: CalificarProyectoComponent;
  let fixture: ComponentFixture<CalificarProyectoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CalificarProyectoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CalificarProyectoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
