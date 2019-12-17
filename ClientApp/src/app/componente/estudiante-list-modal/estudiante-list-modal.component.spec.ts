import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EstudianteListModalComponent } from './estudiante-list-modal.component';

describe('EstudianteListModalComponent', () => {
  let component: EstudianteListModalComponent;
  let fixture: ComponentFixture<EstudianteListModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EstudianteListModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EstudianteListModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
