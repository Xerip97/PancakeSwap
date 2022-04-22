import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LiquidityContainerComponent } from './liquidity-container.component';

describe('LiquidityContainerComponent', () => {
  let component: LiquidityContainerComponent;
  let fixture: ComponentFixture<LiquidityContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LiquidityContainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LiquidityContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
