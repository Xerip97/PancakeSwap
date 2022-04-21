import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeForegroundComponent } from './home-foreground.component';

describe('HomeForegroundComponent', () => {
  let component: HomeForegroundComponent;
  let fixture: ComponentFixture<HomeForegroundComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeForegroundComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeForegroundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
