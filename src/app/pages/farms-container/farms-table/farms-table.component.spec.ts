import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FarmsTableComponent } from './farms-table.component';

describe('FarmsTableComponent', () => {
  let component: FarmsTableComponent;
  let fixture: ComponentFixture<FarmsTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FarmsTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FarmsTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
