import { TestBed } from '@angular/core/testing';

import { CakeValueService } from './cake-value.service';

describe('CakeValueService', () => {
  let service: CakeValueService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CakeValueService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
