import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeLotteryAnimationComponent } from './home-lottery-animation.component';

describe('HomeLotteryAnimationComponent', () => {
  let component: HomeLotteryAnimationComponent;
  let fixture: ComponentFixture<HomeLotteryAnimationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeLotteryAnimationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeLotteryAnimationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
