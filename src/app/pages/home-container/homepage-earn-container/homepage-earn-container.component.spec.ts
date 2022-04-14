import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomepageEarnContainerComponent } from './homepage-earn-container.component';

describe('HomepageEarnContainerComponent', () => {
  let component: HomepageEarnContainerComponent;
  let fixture: ComponentFixture<HomepageEarnContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomepageEarnContainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomepageEarnContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
