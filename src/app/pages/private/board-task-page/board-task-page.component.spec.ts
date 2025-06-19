import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoardTaskPageComponent } from './board-task-page.component';

describe('BoardTaskPageComponent', () => {
  let component: BoardTaskPageComponent;
  let fixture: ComponentFixture<BoardTaskPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BoardTaskPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BoardTaskPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
