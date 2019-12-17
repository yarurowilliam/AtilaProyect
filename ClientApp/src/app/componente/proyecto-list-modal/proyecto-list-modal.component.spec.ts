import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProyectoListModalComponent } from './proyecto-list-modal.component';

describe('ProyectoListModalComponent', () => {
  let component: ProyectoListModalComponent;
  let fixture: ComponentFixture<ProyectoListModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProyectoListModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProyectoListModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
