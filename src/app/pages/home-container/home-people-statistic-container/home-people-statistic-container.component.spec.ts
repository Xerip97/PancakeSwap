import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomePeopleStatisticContainerComponent } from './home-people-statistic-container.component';

describe('HomePeopleStatisticContainerComponent', () => {
  let component: HomePeopleStatisticContainerComponent;
  let fixture: ComponentFixture<HomePeopleStatisticContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomePeopleStatisticContainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomePeopleStatisticContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
