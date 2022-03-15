import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeaderboardContainerComponent } from './leaderboard-container.component';

describe('LeaderboardContainerComponent', () => {
  let component: LeaderboardContainerComponent;
  let fixture: ComponentFixture<LeaderboardContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LeaderboardContainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LeaderboardContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
