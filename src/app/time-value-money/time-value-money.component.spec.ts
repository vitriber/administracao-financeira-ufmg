import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TimeValueMoneyComponent } from './time-value-money.component';

describe('TimeValueMoneyComponent', () => {
  let component: TimeValueMoneyComponent;
  let fixture: ComponentFixture<TimeValueMoneyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TimeValueMoneyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TimeValueMoneyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
