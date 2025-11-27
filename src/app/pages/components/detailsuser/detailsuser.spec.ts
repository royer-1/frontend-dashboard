import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Detailsuser } from './detailsuser';

describe('Detailsuser', () => {
  let component: Detailsuser;
  let fixture: ComponentFixture<Detailsuser>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Detailsuser]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Detailsuser);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
