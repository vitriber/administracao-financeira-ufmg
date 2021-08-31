import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CapmComponent } from './capm.component';

describe('CapmComponent', () => {
  let component: CapmComponent;
  let fixture: ComponentFixture<CapmComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CapmComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CapmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
