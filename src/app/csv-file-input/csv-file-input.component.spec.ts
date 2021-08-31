import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CsvFileInputComponent } from './csv-file-input.component';

describe('CsvFileInputComponent', () => {
  let component: CsvFileInputComponent;
  let fixture: ComponentFixture<CsvFileInputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CsvFileInputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CsvFileInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
