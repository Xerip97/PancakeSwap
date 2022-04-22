import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PoolsCardsComponent } from './pools-cards.component';

describe('PoolsCardsComponent', () => {
  let component: PoolsCardsComponent;
  let fixture: ComponentFixture<PoolsCardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PoolsCardsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PoolsCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
