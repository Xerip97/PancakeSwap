import { Component, OnDestroy, OnInit } from '@angular/core';
import { Lottery } from '@app/models/Lottery-info';
import { LotteryInfoService } from '@app/shared/services/pages/lottery-info.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'pancakeswap-home-section-header-container',
  templateUrl: './home-section-header-container.component.html',
  styleUrls: ['./home-section-header-container.component.css'],
})
export class HomeSectionHeaderContainerComponent implements OnInit, OnDestroy {
  foregroundView = false;
  lotteryInfo!: Lottery;
  lotterySubs!: Subscription;

  constructor(private lotteryInfoService: LotteryInfoService) {}

  ngOnInit(): void {
    this.lotterySubs = this.lotteryInfoService
      .getLotteryInfo()
      .subscribe((data) => {
        this.lotteryInfo = { ...data };
      });
    setTimeout(() => {
      this.lotterySubs.unsubscribe();
    }, this.lotteryInfoService.initialTime * 1000);
  }

  ngOnDestroy(): void {
    this.lotterySubs.unsubscribe();
  }
}
