import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UiWordAvatarComponent } from './ui-word-avatar.component';

describe('UiWordAvatarComponent', () => {
  let component: UiWordAvatarComponent;
  let fixture: ComponentFixture<UiWordAvatarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UiWordAvatarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UiWordAvatarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
