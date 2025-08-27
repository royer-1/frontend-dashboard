import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Formcustomer } from './formcustomer';

describe('Formcustomer', () => {
  let component: Formcustomer;
  let fixture: ComponentFixture<Formcustomer>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Formcustomer]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Formcustomer);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
