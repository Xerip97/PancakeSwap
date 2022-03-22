import { Component, Input, OnInit, EventEmitter } from '@angular/core';
import { BtnDoubleService } from '@app/shared/services/buttons/btn-double.service';

interface ButtonDouble {
  name1: string;
  link1: string;
  name2: string;
  link2: string;
}

@Component({
  selector: 'pancakeswap-btn-double',
  templateUrl: './btn-double.component.html',
  styleUrls: ['./btn-double.component.css'],
})
export class BtnDoubleComponent implements OnInit {
  _btnDouble: ButtonDouble = {
    name1: 'stat1',
    link1: '/',
    name2: 'stat2',
    link2: '/',
  };
  constructor(private btnDoubleService : BtnDoubleService) {}
  @Input() set btnDouble(value: Partial<ButtonDouble>) {
    this._btnDouble = { ...this._btnDouble, ...value };
  }

  ngOnInit(): void {}

  changeButton(event: any) {
    const stat1 = document.querySelector('#label-stat1');
    const stat2 = document.querySelector('#label-stat2');
    let id = event.target.id;
    switch(id) {
      case 'state_2':
        stat1?.classList.remove('btn4');
        stat1?.classList.add('not-checked');
        stat2?.classList.remove('not-checked');
        stat2?.classList.add('btn4');
        this.btnDoubleService.checkButton(false)
        break

        case 'state_1':
          stat2?.classList.remove('btn4');
          stat2?.classList.add('not-checked');
          stat1?.classList.remove('not-checked');
          stat1?.classList.add('btn4');
          this.btnDoubleService.checkButton(true)
          break;
    }
  }
}
