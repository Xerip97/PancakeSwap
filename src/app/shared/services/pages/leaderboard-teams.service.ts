import { Injectable } from '@angular/core';
import { Team } from '@app/models/Team';
@Injectable({
  providedIn: 'root'
})
export class LeaderboardTeamsService {

  constructor() { }

  teams: Team[] = [
  {
    id: 1,
    name: "Syrup Storm",
    description: "The storm's a-comin! Watch out! These bulls are stampeding in a syrupy surge!",
    members: 176009,
    urlAvatar: "https://pancakeswap.finance/images/teams/syrup-storm-md.png",
    urlSfondo: "https://pancakeswap.finance/images/teams/syrup-storm-bg.svg"
  },
  {
    id: 2,
    name: "Fearsome Flippers",
    description: "The flippening is coming. Don't get in these bunnies' way, or you'll get flipped, too!",
    members: 159936,
    urlAvatar: "https://pancakeswap.finance/images/teams/fearsome-flippers-md.png",
    urlSfondo: "https://pancakeswap.finance/images/teams/fearsome-flippers-bg.svg"
  },
  {
    id: 3,
    name: "Chaotic Cakers",
    description: "Can you stand the heat? Stay out of the kitchen or you might get burned to a crisp!",
    members: 323067,
    urlAvatar: "https://pancakeswap.finance/images/teams/chaotic-cakers-md.png",
    urlSfondo: "https://pancakeswap.finance/images/teams/chaotic-cakers-bg.svg"
  }
  ]
}
