import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SupprimeComponent } from './supprime.component';

describe('SupprimeComponent', () => {
  let component: SupprimeComponent;
  let fixture: ComponentFixture<SupprimeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SupprimeComponent]
    });
    fixture = TestBed.createComponent(SupprimeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
