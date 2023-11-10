import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CacherComponent } from './cacher.component';

describe('CacherComponent', () => {
  let component: CacherComponent;
  let fixture: ComponentFixture<CacherComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CacherComponent]
    });
    fixture = TestBed.createComponent(CacherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
