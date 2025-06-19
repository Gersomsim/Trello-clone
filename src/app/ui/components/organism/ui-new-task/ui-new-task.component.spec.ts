import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UiNewTaskComponent } from './ui-new-task.component';

describe('UiNewTaskComponent', () => {
  let component: UiNewTaskComponent;
  let fixture: ComponentFixture<UiNewTaskComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UiNewTaskComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UiNewTaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
