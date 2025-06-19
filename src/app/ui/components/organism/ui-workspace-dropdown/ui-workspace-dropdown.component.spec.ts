import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UiWorkspaceDropdownComponent } from './ui-workspace-dropdown.component';

describe('UiWorkspaceDropdownComponent', () => {
  let component: UiWorkspaceDropdownComponent;
  let fixture: ComponentFixture<UiWorkspaceDropdownComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UiWorkspaceDropdownComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UiWorkspaceDropdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
