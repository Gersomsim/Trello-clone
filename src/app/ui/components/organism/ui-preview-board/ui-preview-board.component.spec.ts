import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UiPreviewBoardComponent } from './ui-preview-board.component';

describe('UiPreviewBoardComponent', () => {
  let component: UiPreviewBoardComponent;
  let fixture: ComponentFixture<UiPreviewBoardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UiPreviewBoardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UiPreviewBoardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
