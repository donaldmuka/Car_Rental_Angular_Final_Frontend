import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CancelpageComponent } from './cancelpage.component';

describe('CancelpageComponent', () => {
  let component: CancelpageComponent;
  let fixture: ComponentFixture<CancelpageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CancelpageComponent]
    });
    fixture = TestBed.createComponent(CancelpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
