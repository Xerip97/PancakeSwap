import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'pancakeswap-home-win-lottery',
  templateUrl: './home-win-lottery.component.html',
  styleUrls: ['./home-win-lottery.component.css'],
})
export class HomeWinLotteryComponent implements OnInit {
  lotteryLabel: string = '';
  numberLottery: number = 249555;
  entireLabel: string = '';
  timeStopped: boolean = false;
  constructor() {}

  ngOnInit(): void {
    setTimeout(() => {
      let div = document.querySelector('.loading-number');
      div?.classList.remove('loading-number');
      this.predictionNumber();
    }, 2000);
  }

  predictionNumber() {
    this.lotteryLabel = '$';
    this.numberLottery = 249555;
    let timer = setInterval(() => {
      this.numberLottery += 10;
      return (this.entireLabel =
        this.lotteryLabel +
        this.numberLottery.toString().slice(0, 3) +
        ',' +
        this.numberLottery.toString().slice(3));
    }, 10);
    setTimeout(() => {
      clearInterval(timer);
    }, 2000);
  }
}
