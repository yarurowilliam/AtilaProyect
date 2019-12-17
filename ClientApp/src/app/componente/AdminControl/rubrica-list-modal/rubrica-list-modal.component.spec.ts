import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RubricaListModalComponent } from './rubrica-list-modal.component';

describe('RubricaListModalComponent', () => {
  let component: RubricaListModalComponent;
  let fixture: ComponentFixture<RubricaListModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RubricaListModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RubricaListModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
