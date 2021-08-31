import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PortfolioReplicanteComponent } from './portfolio-replicante.component';

describe('PortfolioReplicanteComponent', () => {
  let component: PortfolioReplicanteComponent;
  let fixture: ComponentFixture<PortfolioReplicanteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PortfolioReplicanteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PortfolioReplicanteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
