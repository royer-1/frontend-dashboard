import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Auditorios } from './auditorios';

describe('Auditorios', () => {
  let component: Auditorios;
  let fixture: ComponentFixture<Auditorios>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Auditorios]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Auditorios);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
