import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LucaService {
  lucaSbj = new BehaviorSubject<Boolean>(true);
  lucaObs$ = this.lucaSbj.asObservable();
  constructor() {}

  getLucaStatus(): Observable<Boolean> {
    this.lucaSbj.next(JSON.parse(localStorage.getItem('luca') || ''));
    return this.lucaObs$;
  }
}
