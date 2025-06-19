import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UiSelectImageBoardComponent } from './ui-select-image-board.component';

describe('UiSelectImageBoardComponent', () => {
  let component: UiSelectImageBoardComponent;
  let fixture: ComponentFixture<UiSelectImageBoardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UiSelectImageBoardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UiSelectImageBoardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
