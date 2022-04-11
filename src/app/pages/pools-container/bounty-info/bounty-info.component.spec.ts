import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BountyInfoComponent } from './bounty-info.component';

describe('BountyInfoComponent', () => {
  let component: BountyInfoComponent;
  let fixture: ComponentFixture<BountyInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BountyInfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BountyInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
