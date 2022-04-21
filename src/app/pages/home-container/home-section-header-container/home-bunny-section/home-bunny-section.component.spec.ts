import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeBunnySectionComponent } from './home-bunny-section.component';

describe('HomeBunnySectionComponent', () => {
  let component: HomeBunnySectionComponent;
  let fixture: ComponentFixture<HomeBunnySectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeBunnySectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeBunnySectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
