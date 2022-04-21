import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeSectionHeaderContainerComponent } from './home-section-header-container.component';

describe('HomeSectionHeaderContainerComponent', () => {
  let component: HomeSectionHeaderContainerComponent;
  let fixture: ComponentFixture<HomeSectionHeaderContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeSectionHeaderContainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeSectionHeaderContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
