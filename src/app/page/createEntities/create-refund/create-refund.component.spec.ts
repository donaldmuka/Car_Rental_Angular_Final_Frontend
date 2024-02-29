import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateRefundComponent } from './create-refund.component';

describe('CreateRefundComponent', () => {
  let component: CreateRefundComponent;
  let fixture: ComponentFixture<CreateRefundComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreateRefundComponent]
    });
    fixture = TestBed.createComponent(CreateRefundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
