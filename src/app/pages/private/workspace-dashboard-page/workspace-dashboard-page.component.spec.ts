import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkspaceDashboardPageComponent } from './workspace-dashboard-page.component';

describe('WorkspaceDashboardPageComponent', () => {
  let component: WorkspaceDashboardPageComponent;
  let fixture: ComponentFixture<WorkspaceDashboardPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WorkspaceDashboardPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WorkspaceDashboardPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
