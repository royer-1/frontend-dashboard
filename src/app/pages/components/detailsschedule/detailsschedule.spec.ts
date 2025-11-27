import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Detailsschedule } from './detailsschedule';

describe('Detailsschedule', () => {
  let component: Detailsschedule;
  let fixture: ComponentFixture<Detailsschedule>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Detailsschedule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Detailsschedule);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
