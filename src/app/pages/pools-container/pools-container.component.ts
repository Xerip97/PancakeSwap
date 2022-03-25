import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'pancakeswap-pools-container',
  templateUrl: './pools-container.component.html',
  styleUrls: ['./pools-container.component.css'],
})
export class PoolsContainerComponent implements OnInit {
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
