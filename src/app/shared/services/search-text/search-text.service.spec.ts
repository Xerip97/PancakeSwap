import { TestBed } from '@angular/core/testing';

import { SearchTextService } from '../search-text/search-text.service';

describe('SearchTextService', () => {
  let service: SearchTextService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SearchTextService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
