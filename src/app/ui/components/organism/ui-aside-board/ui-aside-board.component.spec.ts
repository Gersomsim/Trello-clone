import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UiAsideBoardComponent } from './ui-aside-board.component';

describe('UiAsideBoardComponent', () => {
  let component: UiAsideBoardComponent;
  let fixture: ComponentFixture<UiAsideBoardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UiAsideBoardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UiAsideBoardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
