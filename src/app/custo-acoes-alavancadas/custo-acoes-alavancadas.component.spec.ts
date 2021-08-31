import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustoAcoesAlavancadasComponent } from './custo-acoes-alavancadas.component';

describe('CustoAcoesAlavancadasComponent', () => {
  let component: CustoAcoesAlavancadasComponent;
  let fixture: ComponentFixture<CustoAcoesAlavancadasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustoAcoesAlavancadasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustoAcoesAlavancadasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
