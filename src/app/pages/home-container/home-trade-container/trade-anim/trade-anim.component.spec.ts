import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TradeAnimComponent } from './trade-anim.component';

describe('TradeAnimComponent', () => {
  let component: TradeAnimComponent;
  let fixture: ComponentFixture<TradeAnimComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TradeAnimComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TradeAnimComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
