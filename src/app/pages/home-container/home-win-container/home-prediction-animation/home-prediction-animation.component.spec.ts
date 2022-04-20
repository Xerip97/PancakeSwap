import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomePredictionAnimationComponent } from './home-prediction-animation.component';

describe('HomePredictionAnimationComponent', () => {
  let component: HomePredictionAnimationComponent;
  let fixture: ComponentFixture<HomePredictionAnimationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomePredictionAnimationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomePredictionAnimationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
