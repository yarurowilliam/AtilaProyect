import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AsignaturapruebaComponent } from './asignaturaprueba.component';

describe('AsignaturapruebaComponent', () => {
  let component: AsignaturapruebaComponent;
  let fixture: ComponentFixture<AsignaturapruebaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AsignaturapruebaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AsignaturapruebaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
