import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RubricaAddComponent } from './rubrica-add.component';

describe('RubricaAddComponent', () => {
  let component: RubricaAddComponent;
  let fixture: ComponentFixture<RubricaAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RubricaAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RubricaAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
