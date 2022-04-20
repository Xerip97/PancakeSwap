import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SmallBarComponent } from './small-bar.component';

describe('SmallBarComponent', () => {
  let component: SmallBarComponent;
  let fixture: ComponentFixture<SmallBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SmallBarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SmallBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
