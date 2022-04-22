import { Injectable } from '@angular/core';
import { Lottery } from '@app/models/Lottery-info';
import { interval, map, Observable } from 'rxjs';
import { TimerService } from '../timer/timer.service';

@Injectable({
  providedIn: 'root',
})
export class LotteryInfoService {
  lottery!: Lottery;
  timeSeconds!: number;
  initialTime!: number;

  constructor(private timer: TimerService) {}

  getLotteryInfo(): Observable<Lottery> {
    this.timeSeconds = Math.floor(Math.random() * (82800 - 3600) + 3600);
    this.initialTime = this.timeSeconds;
    this.lottery = {
      jackpot: Math.floor(Math.random() * (100000 - 50000) + 50000),
      date: this.timer.generate(this.timeSeconds),
    };

    let lotteryObs$ = interval(1000).pipe(
      map(() => {
        this.lottery.date = this.timer.generate(this.timeSeconds);
        if (this.timeSeconds % 3 === 0) {
          this.lottery.jackpot += Math.floor(Math.random() * 30);
        }
        this.timeSeconds--;

        return this.lottery;
      })
    );

    return lotteryObs$;
  }
}
