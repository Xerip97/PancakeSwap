import { Component, OnInit, Query } from '@angular/core';

@Component({
  selector: 'pancakeswap-btn-tris',
  templateUrl: './btn-tris.component.html',
  styleUrls: ['./btn-tris.component.css'],
})
export class BtnTrisComponent implements OnInit {
  toggle = true;
  status = 'Enable';
  btn = document.querySelector('.button11_4');

  enableDisableRule(btn: any) {
    this.toggle = !this.toggle;
    this.status = this.toggle ? 'Enable' : 'Disable';
    if (btn) {
      
    }
  }
  constructor() {}

  ngOnInit(): void {}
}
