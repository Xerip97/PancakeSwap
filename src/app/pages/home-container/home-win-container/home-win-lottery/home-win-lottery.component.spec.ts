import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeWinLotteryComponent } from './home-win-lottery.component';

describe('HomeWinLotteryComponent', () => {
  let component: HomeWinLotteryComponent;
  let fixture: ComponentFixture<HomeWinLotteryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeWinLotteryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeWinLotteryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
