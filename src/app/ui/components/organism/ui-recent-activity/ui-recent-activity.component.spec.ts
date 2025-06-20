import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UiRecentActivityComponent } from './ui-recent-activity.component';

describe('UiRecentActivityComponent', () => {
  let component: UiRecentActivityComponent;
  let fixture: ComponentFixture<UiRecentActivityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UiRecentActivityComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UiRecentActivityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
