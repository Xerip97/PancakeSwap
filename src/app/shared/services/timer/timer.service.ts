import { Injectable } from '@angular/core';
import { Timer } from '@app/models/Timer';

@Injectable({
  providedIn: 'root',
})
export class TimerService {
  constructor() {}

  generate(time: number): Timer {
    let hours = Math.floor(time / 3600);
    time = time - hours * 3600;
    let minutes = Math.floor(time / 60);
    time = time - minutes * 60;
    let seconds = time;

    let timer: Timer = {
      hours: hours,
      minutes: minutes,
      seconds: seconds,
    };
    return timer;
  }
}
