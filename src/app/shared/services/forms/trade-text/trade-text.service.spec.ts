import { TestBed } from '@angular/core/testing';

import { TradeTextService } from './trade-text.service';

describe('TradeTextService', () => {
  let service: TradeTextService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TradeTextService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
