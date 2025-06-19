import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UiNewListComponent } from './ui-new-list.component';

describe('UiNewListComponent', () => {
  let component: UiNewListComponent;
  let fixture: ComponentFixture<UiNewListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UiNewListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UiNewListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
