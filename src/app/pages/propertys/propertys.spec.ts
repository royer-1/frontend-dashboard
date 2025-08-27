import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Propertys } from './propertys';

describe('Propertys', () => {
  let component: Propertys;
  let fixture: ComponentFixture<Propertys>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Propertys]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Propertys);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
