import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Detailsproperty } from './detailsproperty';

describe('Detailsproperty', () => {
  let component: Detailsproperty;
  let fixture: ComponentFixture<Detailsproperty>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Detailsproperty]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Detailsproperty);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
