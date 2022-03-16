import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FarmsContainerComponent } from './farms-container.component';

describe('FarmsContainerComponent', () => {
  let component: FarmsContainerComponent;
  let fixture: ComponentFixture<FarmsContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FarmsContainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FarmsContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
