import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CsvLoadComponent } from './csv-load.component';

describe('CsvLoadComponent', () => {
  let component: CsvLoadComponent;
  let fixture: ComponentFixture<CsvLoadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CsvLoadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CsvLoadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
