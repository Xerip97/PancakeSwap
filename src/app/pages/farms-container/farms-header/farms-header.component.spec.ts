import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FarmsHeaderComponent } from './farms-header.component';

describe('FarmsHeaderComponent', () => {
  let component: FarmsHeaderComponent;
  let fixture: ComponentFixture<FarmsHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FarmsHeaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FarmsHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
