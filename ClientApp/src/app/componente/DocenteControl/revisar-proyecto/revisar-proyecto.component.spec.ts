import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RevisarProyectoComponent } from './revisar-proyecto.component';

describe('RevisarProyectoComponent', () => {
  let component: RevisarProyectoComponent;
  let fixture: ComponentFixture<RevisarProyectoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RevisarProyectoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RevisarProyectoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
