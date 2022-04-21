import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TradeUndernavbarDivComponent } from './trade-undernavbar-div.component';

describe('TradeUndernavbarDivComponent', () => {
  let component: TradeUndernavbarDivComponent;
  let fixture: ComponentFixture<TradeUndernavbarDivComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TradeUndernavbarDivComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TradeUndernavbarDivComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
