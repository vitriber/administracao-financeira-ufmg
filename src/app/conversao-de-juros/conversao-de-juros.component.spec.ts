import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConversaoDeJurosComponent } from './conversao-de-juros.component';

describe('ConversaoDeJurosComponent', () => {
  let component: ConversaoDeJurosComponent;
  let fixture: ComponentFixture<ConversaoDeJurosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConversaoDeJurosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConversaoDeJurosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
