import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomepageEarnAnimationComponent } from './homepage-earn-animation.component';

describe('HomepageEarnAnimationComponent', () => {
  let component: HomepageEarnAnimationComponent;
  let fixture: ComponentFixture<HomepageEarnAnimationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomepageEarnAnimationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomepageEarnAnimationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
