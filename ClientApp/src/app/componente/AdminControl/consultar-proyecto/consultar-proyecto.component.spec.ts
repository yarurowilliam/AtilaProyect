import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultarProyectoComponent } from './consultar-proyecto.component';

describe('ConsultarProyectoComponent', () => {
  let component: ConsultarProyectoComponent;
  let fixture: ComponentFixture<ConsultarProyectoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConsultarProyectoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsultarProyectoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
