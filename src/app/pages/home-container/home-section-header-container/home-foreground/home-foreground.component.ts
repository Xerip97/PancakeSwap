import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Lottery } from '@app/models/Lottery-info';
import { LucaService } from '@app/shared/services/luca/luca.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'pancakeswap-home-foreground',
  templateUrl: './home-foreground.component.html',
  styleUrls: ['./home-foreground.component.css'],
})
export class HomeForegroundComponent implements OnInit, OnDestroy {
  @Input() foregroundView = true;
  @Input() lotteryInfo!: Lottery;
  luca: Boolean = false;
  lucaSub!: Subscription;

  constructor(private lucaService: LucaService) {}

  ngOnInit(): void {
    this.lucaSub = this.lucaService.getLucaStatus().subscribe((data) => {
      this.luca = data;
      console.log(this.luca);
    });
  }

  ngOnDestroy(): void {
    this.lucaSub.unsubscribe();
  }
}
