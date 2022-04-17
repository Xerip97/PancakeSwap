import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'pancakeswap-team-detail',
  templateUrl: './team-detail.component.html',
  styleUrls: ['./team-detail.component.css'],
})
export class TeamDetailComponent implements OnInit {
  teamId!: number;
  constructor(private activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
    this.teamId = +this.activatedRoute.snapshot.paramMap.get('id')!;
    window.scrollTo(0, 0);
  }
}
