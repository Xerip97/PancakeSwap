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
  isTimePaused: boolean = false;

  constructor() {}

  ngOnInit(): void {
    this.checkTime();
  }
  
  changeView() {
    if (this.isViewFarms == true) {
      this.showPools();
    } else {
      this.showFarms();
    }
  }
  showFarms() {
    let farms = document.querySelector('.farms');
    let pools = document.querySelector('.pools');
    this.isViewFarms = true;
    farms?.classList.remove('out');
    farms?.classList.remove('dont-show');
    pools?.classList.add('out');
    pools?.classList.add('dont-show');
    farms?.classList.add('in');
    this.topText = 'Farms';
  }

  showPools() {
    let farms = document.querySelector('.farms');
    let pools = document.querySelector('.pools');
    this.isViewFarms = false;
    pools?.classList.remove('out');
    pools?.classList.remove('dont-show');
    farms?.classList.add('out');
    farms?.classList.add('dont-show');
    pools?.classList.add('in');
    this.topText = 'Syrup Pools';
  }

  checkTime() {
    if (!this.isTimePaused) {
      setInterval(() => {
        this.changeView();
      }, 5000);
    }
  }
}
