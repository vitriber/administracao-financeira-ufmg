import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Formula1Component } from './formula1.component';

describe('Formula1Component', () => {
  let component: Formula1Component;
  let fixture: ComponentFixture<Formula1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Formula1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Formula1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
