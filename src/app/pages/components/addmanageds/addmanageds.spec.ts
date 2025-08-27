import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Addmanageds } from './addmanageds';

describe('Addmanageds', () => {
  let component: Addmanageds;
  let fixture: ComponentFixture<Addmanageds>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Addmanageds]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Addmanageds);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
