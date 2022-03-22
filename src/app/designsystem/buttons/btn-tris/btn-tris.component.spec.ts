import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BtnTrisComponent } from './btn-tris.component';

describe('BtnTrisComponent', () => {
  let component: BtnTrisComponent;
  let fixture: ComponentFixture<BtnTrisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BtnTrisComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BtnTrisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
