import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Editmanageds } from './editmanageds';

describe('Editmanageds', () => {
  let component: Editmanageds;
  let fixture: ComponentFixture<Editmanageds>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Editmanageds]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Editmanageds);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
