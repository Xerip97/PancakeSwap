import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { debounceTime, distinctUntilChanged, Subject } from 'rxjs';
import { TradeTextService } from '@app/shared/services/forms/trade-text/trade-text.service';

interface DefaultNumber {
  number: string;
}

@Component({
  selector: 'pancakeswap-form-text-trade',
  templateUrl: './form-text-trade.component.html',
  styleUrls: ['./form-text-trade.component.css']
})
export class FormTextTradeComponent implements OnInit {
  // @Output() value = new EventEmitter
  // number: any 
  // private subjectKeyUp = new Subject<any>()

  // _displayNumber: DefaultNumber = {
  //   number: '0.0'
  // }

  // @Input() set displayNumber(value: Partial<DefaultNumber>) {
  //   this._displayNumber = { ...this._displayNumber, ...value };
  // }

  constructor(private tradeTextService : TradeTextService) { 
    // this.subjectKeyUp
    // .pipe(debounceTime(1000), distinctUntilChanged()).subscribe((d) => this.callTakeNumber(d))
    
  }

  ngOnInit(): void {
  }

  // onType($event: any) {
  //   if ($event.target.value > 0) {
  //   const search = $event.target.value;
  //   this.subjectKeyUp.next(search)}
  //   }
  
    
  //   callTakeNumber (value: string) {
  //     let num: number = parseFloat(value)
  //     return this.tradeTextService.takeNumber(num)
  //   }

}
