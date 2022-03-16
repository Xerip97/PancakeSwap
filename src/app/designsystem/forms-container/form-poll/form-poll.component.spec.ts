import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormPollComponent } from './form-poll.component';

describe('FormPollComponent', () => {
  let component: FormPollComponent;
  let fixture: ComponentFixture<FormPollComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormPollComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormPollComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
