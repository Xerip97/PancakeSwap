import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BtnDoubleComponent } from './btn-double.component';

describe('BtnDoubleComponent', () => {
  let component: BtnDoubleComponent;
  let fixture: ComponentFixture<BtnDoubleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BtnDoubleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BtnDoubleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
