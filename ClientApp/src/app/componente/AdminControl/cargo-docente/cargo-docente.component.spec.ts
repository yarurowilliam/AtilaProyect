import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CargoDocenteComponent } from './cargo-docente.component';

describe('CargoDocenteComponent', () => {
  let component: CargoDocenteComponent;
  let fixture: ComponentFixture<CargoDocenteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CargoDocenteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CargoDocenteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
