import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Manageds } from './manageds';

describe('Manageds', () => {
  let component: Manageds;
  let fixture: ComponentFixture<Manageds>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Manageds]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Manageds);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
