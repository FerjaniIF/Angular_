import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuppToutComponent } from './supp-tout.component';

describe('SuppToutComponent', () => {
  let component: SuppToutComponent;
  let fixture: ComponentFixture<SuppToutComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SuppToutComponent]
    });
    fixture = TestBed.createComponent(SuppToutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
