import { TestBed } from '@angular/core/testing';

import { LotteryInfoService } from './lottery-info.service';

describe('LotteryInfoService', () => {
  let service: LotteryInfoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LotteryInfoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
