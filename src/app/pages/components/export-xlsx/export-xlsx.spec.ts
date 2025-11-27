import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExportXlsx } from './export-xlsx';

describe('ExportXlsx', () => {
  let component: ExportXlsx;
  let fixture: ComponentFixture<ExportXlsx>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExportXlsx]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExportXlsx);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
