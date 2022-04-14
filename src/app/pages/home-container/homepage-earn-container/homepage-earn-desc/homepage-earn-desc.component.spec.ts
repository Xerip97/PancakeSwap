import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomepageEarnDescComponent } from './homepage-earn-desc.component';

describe('HomepageEarnDescComponent', () => {
  let component: HomepageEarnDescComponent;
  let fixture: ComponentFixture<HomepageEarnDescComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomepageEarnDescComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomepageEarnDescComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
