import { Component, Input, OnInit } from '@angular/core';
import { Lottery } from '@app/models/Lottery-info';

@Component({
  selector: 'pancakeswap-home-foreground',
  templateUrl: './home-foreground.component.html',
  styleUrls: ['./home-foreground.component.css'],
})
export class HomeForegroundComponent implements OnInit {
  @Input() foregroundView = true;
  @Input() lotteryInfo!: Lottery;

  constructor() {}

  ngOnInit(): void {}
}
