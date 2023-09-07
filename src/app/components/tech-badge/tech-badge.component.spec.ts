import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TechBadgeComponent } from './tech-badge.component';

describe('TechBadgeComponent', () => {
  let component: TechBadgeComponent;
  let fixture: ComponentFixture<TechBadgeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TechBadgeComponent]
    });
    fixture = TestBed.createComponent(TechBadgeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
