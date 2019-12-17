import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AsignaturaListModalComponent } from './asignatura-list-modal.component';

describe('AsignaturaListModalComponent', () => {
  let component: AsignaturaListModalComponent;
  let fixture: ComponentFixture<AsignaturaListModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AsignaturaListModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AsignaturaListModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
