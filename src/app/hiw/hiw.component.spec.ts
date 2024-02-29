import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HiwComponent } from './hiw.component';

describe('HiwComponent', () => {
  let component: HiwComponent;
  let fixture: ComponentFixture<HiwComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HiwComponent]
    });
    fixture = TestBed.createComponent(HiwComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
