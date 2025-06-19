import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UiFormNewBoardComponent } from './ui-form-new-board.component';

describe('UiFormNewBoardComponent', () => {
  let component: UiFormNewBoardComponent;
  let fixture: ComponentFixture<UiFormNewBoardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UiFormNewBoardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UiFormNewBoardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
