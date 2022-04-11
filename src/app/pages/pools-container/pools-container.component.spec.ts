import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PoolsContainerComponent } from './pools-container.component';

describe('PoolsContainerComponent', () => {
  let component: PoolsContainerComponent;
  let fixture: ComponentFixture<PoolsContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PoolsContainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PoolsContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
