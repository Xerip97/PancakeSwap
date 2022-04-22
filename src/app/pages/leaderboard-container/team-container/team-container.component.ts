import { Component, Input, OnInit } from '@angular/core';
import { Team } from '@app/models/Team';
import { LeaderboardTeamsService } from '@app/shared/services/pages/leaderboard-teams.service';

@Component({
  selector: 'pancakeswap-team-container',
  templateUrl: './team-container.component.html',
  styleUrls: ['./team-container.component.css'],
})
export class TeamContainerComponent implements OnInit {
  @Input() teamId!: number;
  team!: Team;
  constructor(private teamTeamsService: LeaderboardTeamsService) {}

  ngOnInit(): void {
    this.team = this.teamTeamsService.teams[this.teamId - 1];
  }
}
