import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WaccComponent } from './wacc.component';

describe('WaccComponent', () => {
  let component: WaccComponent;
  let fixture: ComponentFixture<WaccComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WaccComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WaccComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
