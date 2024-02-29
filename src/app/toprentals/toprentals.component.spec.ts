import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToprentalsComponent } from './toprentals.component';

describe('ToprentalsComponent', () => {
  let component: ToprentalsComponent;
  let fixture: ComponentFixture<ToprentalsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ToprentalsComponent]
    });
    fixture = TestBed.createComponent(ToprentalsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
