import { Component, OnInit } from '@angular/core';
import { Farms } from '@app/models/Farms';
import { Pool } from '@app/models/Pool';
import { farms } from 'src/mock/farmsMock';
import { pools } from 'src/mock/poolsMock';

@Component({
  selector: 'pancakeswap-homepage-earn-table',
  templateUrl: './homepage-earn-table.component.html',
  styleUrls: ['./homepage-earn-table.component.css'],
})
export class HomepageEarnTableComponent implements OnInit {
  farms: Farms[] = farms;
  pools: Pool[] = pools;
  isViewFarms: boolean = true;
  topText: string = 'Farms';

  constructor() {}

  ngOnInit(): void {}

  changeView() {
    let farms = document.querySelector('.farms');
    let pools = document.querySelector('.pools');
    if (this.isViewFarms == true) {
      setTimeout(() => {
        this.isViewFarms = false;
      }, 500);
      pools?.classList.remove('out');
      pools?.classList.remove('dont-show');
      farms?.classList.add('out');
      farms?.classList.add('dont-show');
      pools?.classList.add('in')

      this.topText = 'Syrup Pools';
    } else {
      setTimeout(() => {
        this.isViewFarms = true;
      }, 500);
      farms?.classList.remove('out')
      farms?.classList.remove('dont-show')
      pools?.classList.add('out');
      pools?.classList.add('dont-show');
      farms?.classList.add('in')

      this.topText = 'Farms';
    }
  }
}
