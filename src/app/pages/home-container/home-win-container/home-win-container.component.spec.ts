import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeWinContainerComponent } from './home-win-container.component';

describe('HomeWinContainerComponent', () => {
  let component: HomeWinContainerComponent;
  let fixture: ComponentFixture<HomeWinContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeWinContainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeWinContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
