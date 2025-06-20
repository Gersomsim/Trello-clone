import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UiPreviewWorkspaceComponent } from './ui-preview-workspace.component';

describe('UiPreviewWorkspaceComponent', () => {
  let component: UiPreviewWorkspaceComponent;
  let fixture: ComponentFixture<UiPreviewWorkspaceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UiPreviewWorkspaceComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UiPreviewWorkspaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
