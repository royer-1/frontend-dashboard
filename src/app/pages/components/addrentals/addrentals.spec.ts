import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Addrentals } from './addrentals';

describe('Addrentals', () => {
  let component: Addrentals;
  let fixture: ComponentFixture<Addrentals>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Addrentals]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Addrentals);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
