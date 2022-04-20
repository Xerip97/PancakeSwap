import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeEarnTableComponent } from './home-earn-table.component';

describe('HomepageEarnTableComponent', () => {
  let component: HomeEarnTableComponent;
  let fixture: ComponentFixture<HomeEarnTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeEarnTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeEarnTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
