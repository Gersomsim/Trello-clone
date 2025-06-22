import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UiListTaskComponent } from './ui-list-task.component';

describe('UiListTaskComponent', () => {
  let component: UiListTaskComponent;
  let fixture: ComponentFixture<UiListTaskComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UiListTaskComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UiListTaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
