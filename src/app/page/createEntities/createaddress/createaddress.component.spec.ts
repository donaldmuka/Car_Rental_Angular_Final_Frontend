import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateaddressComponent } from './createaddress.component';

describe('CreateaddressComponent', () => {
  let component: CreateaddressComponent;
  let fixture: ComponentFixture<CreateaddressComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreateaddressComponent]
    });
    fixture = TestBed.createComponent(CreateaddressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
