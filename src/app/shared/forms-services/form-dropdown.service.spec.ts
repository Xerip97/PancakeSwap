import { TestBed } from '@angular/core/testing';

import { FormDropdownService } from '../forms-services/form-dropdown.service';

describe('FormDropdownService', () => {
  let service: FormDropdownService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FormDropdownService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
