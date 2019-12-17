import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultarDocenteModalComponent } from './consultar-docente-modal.component';

describe('ConsultarDocenteModalComponent', () => {
  let component: ConsultarDocenteModalComponent;
  let fixture: ComponentFixture<ConsultarDocenteModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConsultarDocenteModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsultarDocenteModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
