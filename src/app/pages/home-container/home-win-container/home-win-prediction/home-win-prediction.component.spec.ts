import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeWinPredictionComponent } from './home-win-prediction.component';

describe('HomeWinPredictionComponent', () => {
  let component: HomeWinPredictionComponent;
  let fixture: ComponentFixture<HomeWinPredictionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeWinPredictionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeWinPredictionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
