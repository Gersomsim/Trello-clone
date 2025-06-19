import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UiNewBoardComponent } from './ui-new-board.component';

describe('UiNewBoardComponent', () => {
  let component: UiNewBoardComponent;
  let fixture: ComponentFixture<UiNewBoardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UiNewBoardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UiNewBoardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
