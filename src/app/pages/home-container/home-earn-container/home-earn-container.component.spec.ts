import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeEarnContainerComponent } from './home-earn-container.component';

describe('HomepageEarnContainerComponent', () => {
  let component: HomeEarnContainerComponent;
  let fixture: ComponentFixture<HomeEarnContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeEarnContainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeEarnContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
