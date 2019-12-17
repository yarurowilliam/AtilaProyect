import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProyectosRevisarComponent } from './proyectos-revisar.component';

describe('ProyectosRevisarComponent', () => {
  let component: ProyectosRevisarComponent;
  let fixture: ComponentFixture<ProyectosRevisarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProyectosRevisarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProyectosRevisarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
