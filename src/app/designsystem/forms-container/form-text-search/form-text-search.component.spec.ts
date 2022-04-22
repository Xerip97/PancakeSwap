import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormTextSearchComponent } from './form-text-search.component';

describe('FormTextComponent', () => {
  let component: FormTextSearchComponent;
  let fixture: ComponentFixture<FormTextSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormTextSearchComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormTextSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
