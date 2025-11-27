import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Addproperty } from './addproperty';

describe('Addproperty', () => {
  let component: Addproperty;
  let fixture: ComponentFixture<Addproperty>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Addproperty]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Addproperty);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
