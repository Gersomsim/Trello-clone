import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UiEditFullTaskComponent } from './ui-edit-full-task.component';

describe('UiEditFullTaskComponent', () => {
  let component: UiEditFullTaskComponent;
  let fixture: ComponentFixture<UiEditFullTaskComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UiEditFullTaskComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UiEditFullTaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
