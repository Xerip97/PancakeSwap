import { TestBed } from '@angular/core/testing';

import { BtnDoubleService } from './btn-double.service';

describe('BtnDoubleService', () => {
  let service: BtnDoubleService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BtnDoubleService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
