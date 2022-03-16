import { Component, Input, OnInit } from '@angular/core';
import { Team } from '@app/models/Team';

@Component({
  selector: 'pancakeswap-teams',
  templateUrl: './teams.component.html',
  styleUrls: ['./teams.component.css']
})
export class TeamsComponent implements OnInit {
  @Input() team!: Team

  constructor() { }

  ngOnInit(): void {
  }
  
  valueDecimal(number: number){
    return number / 1000
  }
}
