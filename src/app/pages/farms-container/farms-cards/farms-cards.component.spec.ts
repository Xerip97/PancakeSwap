import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FarmsCardsComponent } from './farms-cards.component';

describe('FarmsCardsComponent', () => {
  let component: FarmsCardsComponent;
  let fixture: ComponentFixture<FarmsCardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FarmsCardsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FarmsCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
