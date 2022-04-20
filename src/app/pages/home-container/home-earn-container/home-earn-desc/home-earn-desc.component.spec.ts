import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeEarnDescComponent } from './home-earn-desc.component';

describe('HomepageEarnDescComponent', () => {
  let component: HomeEarnDescComponent;
  let fixture: ComponentFixture<HomeEarnDescComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeEarnDescComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeEarnDescComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
