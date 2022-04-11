import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EarnUndernavbarDivComponent } from './earn-undernavbar-div.component';

describe('EarnUndernavbarDivComponent', () => {
  let component: EarnUndernavbarDivComponent;
  let fixture: ComponentFixture<EarnUndernavbarDivComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EarnUndernavbarDivComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EarnUndernavbarDivComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
