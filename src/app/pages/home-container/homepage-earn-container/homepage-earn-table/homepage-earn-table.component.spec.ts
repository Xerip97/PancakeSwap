import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomepageEarnTableComponent } from './homepage-earn-table.component';

describe('HomepageEarnTableComponent', () => {
  let component: HomepageEarnTableComponent;
  let fixture: ComponentFixture<HomepageEarnTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomepageEarnTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomepageEarnTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
