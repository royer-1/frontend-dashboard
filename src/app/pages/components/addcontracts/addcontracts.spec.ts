import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Addcontracts } from './addcontracts';

describe('Addcontracts', () => {
  let component: Addcontracts;
  let fixture: ComponentFixture<Addcontracts>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Addcontracts]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Addcontracts);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
