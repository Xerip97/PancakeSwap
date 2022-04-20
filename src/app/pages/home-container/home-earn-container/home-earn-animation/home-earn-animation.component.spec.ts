import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeEarnAnimationComponent } from './home-earn-animation.component';

describe('HomepageEarnAnimationComponent', () => {
  let component: HomeEarnAnimationComponent;
  let fixture: ComponentFixture<HomeEarnAnimationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeEarnAnimationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeEarnAnimationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
