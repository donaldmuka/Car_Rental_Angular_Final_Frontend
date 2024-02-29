import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RentalCRMComponent } from './rental-crm.component';

describe('RentalCRMComponent', () => {
  let component: RentalCRMComponent;
  let fixture: ComponentFixture<RentalCRMComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RentalCRMComponent]
    });
    fixture = TestBed.createComponent(RentalCRMComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
