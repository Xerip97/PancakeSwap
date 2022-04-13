import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'pancakeswap-bounty-info',
  templateUrl: './bounty-info.component.html',
  styleUrls: ['./bounty-info.component.css'],
})
export class BountyInfoComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  showBountyInfo() {
    const bountyInfo = document.querySelector('.bounty-info');
    bountyInfo?.classList.add('bounty-info-visible');
  }

  hideBountyInfo() {
    const bountyInfo = document.querySelector('.bounty-info');
    bountyInfo?.classList.remove('bounty-info-visible');
  }
}
