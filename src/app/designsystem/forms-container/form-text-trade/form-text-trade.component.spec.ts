import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormTextTradeComponent } from './form-text-trade.component';

describe('FormTextTradeComponent', () => {
  let component: FormTextTradeComponent;
  let fixture: ComponentFixture<FormTextTradeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormTextTradeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormTextTradeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
