import { Component, Input, OnInit, EventEmitter } from '@angular/core';

interface ButtonDouble {
  link1: string;
  link2: string;
}

@Component({
  selector: 'pancakeswap-btn-double',
  templateUrl: './btn-double.component.html',
  styleUrls: ['./btn-double.component.css'],
})
export class BtnDoubleComponent implements OnInit {
  _btnDouble: ButtonDouble = {
    link1: 'Live',
    link2: 'Finished',
  };
  constructor() {}
  @Input() set btnDouble(value: Partial<ButtonDouble>) {
    this._btnDouble = { ...this._btnDouble, ...value };
  }

  ngOnInit(): void {}

  changeButton(event: any) {
    const live = document.querySelector('#label-live');
    const finished = document.querySelector('#label-finished');
    let id = event.target.id;
    switch(id) {
      case 'finished':
      live?.classList.remove('btn4');
        live?.classList.add('not-checked');
        finished?.classList.remove('not-checked');
        finished?.classList.add('btn4');
        break

        case 'live':
          finished?.classList.remove('btn4');
          finished?.classList.add('not-checked');
          live?.classList.remove('not-checked');
          live?.classList.add('btn4');
          break;
    }
  }
}
