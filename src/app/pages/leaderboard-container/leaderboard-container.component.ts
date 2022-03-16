import { Component, OnInit } from '@angular/core';
import { Team } from '@app/models/Team';
import { LeaderboardTeamsService } from '@app/shared/services/pages/leaderboard-teams.service';

@Component({
  selector: 'pancakeswap-leaderboard-container',
  templateUrl: './leaderboard-container.component.html',
  styleUrls: ['./leaderboard-container.component.css']
})
export class LeaderboardContainerComponent implements OnInit {
  teams: Team[] = []
  constructor(private leaderboardTeamsService: LeaderboardTeamsService) { }

  ngOnInit(): void {
    this.teams = this.leaderboardTeamsService.teams
  }

}
