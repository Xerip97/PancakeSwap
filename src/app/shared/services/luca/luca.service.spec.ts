import { TestBed } from '@angular/core/testing';

import { LucaService } from './luca.service';

describe('LucaService', () => {
  let service: LucaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LucaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
