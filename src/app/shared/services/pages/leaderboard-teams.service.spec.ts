import { TestBed } from '@angular/core/testing';

import { LeaderboardTeamsService } from './leaderboard-teams.service';

describe('LeaderboardTeamsService', () => {
  let service: LeaderboardTeamsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LeaderboardTeamsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
