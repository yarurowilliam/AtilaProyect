import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultarProyectoModalComponent } from './consultar-proyecto-modal.component';

describe('ConsultarProyectoModalComponent', () => {
  let component: ConsultarProyectoModalComponent;
  let fixture: ComponentFixture<ConsultarProyectoModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConsultarProyectoModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsultarProyectoModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
