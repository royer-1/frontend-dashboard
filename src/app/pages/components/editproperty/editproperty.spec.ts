import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Editproperty } from './editproperty';

describe('Editproperty', () => {
  let component: Editproperty;
  let fixture: ComponentFixture<Editproperty>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Editproperty]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Editproperty);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
