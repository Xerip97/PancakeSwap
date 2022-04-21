import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeTradeContainerComponent } from './home-trade-container.component';

describe('HomeTradeContainerComponent', () => {
  let component: HomeTradeContainerComponent;
  let fixture: ComponentFixture<HomeTradeContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeTradeContainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeTradeContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
