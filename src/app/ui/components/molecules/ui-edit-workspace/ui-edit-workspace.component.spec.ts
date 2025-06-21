import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UiEditWorkspaceComponent } from './ui-edit-workspace.component';

describe('UiEditWorkspaceComponent', () => {
  let component: UiEditWorkspaceComponent;
  let fixture: ComponentFixture<UiEditWorkspaceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UiEditWorkspaceComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UiEditWorkspaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
