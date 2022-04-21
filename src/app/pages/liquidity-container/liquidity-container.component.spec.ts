import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SettComponent } from './sett/sett.component';
import { TradeUndernavbarDivComponent } from './trade-undernavbar-div/trade-undernavbar-div.component';

import { LiquidityContainerComponent } from './liquidity-container.component';
import { NgModule } from '@angular/core';


describe('LiquidityContainerComponent', () => {
  let component: LiquidityContainerComponent;
  let fixture: ComponentFixture<LiquidityContainerComponent>;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        LiquidityContainerComponent,
        SettComponent,
        TradeUndernavbarDivComponent,
      ],
    }).compileComponents();
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
