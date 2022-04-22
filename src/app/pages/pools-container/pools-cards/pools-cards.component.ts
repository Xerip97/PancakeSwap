import { Component, OnInit, Input } from '@angular/core';
import { Pool } from '@app/models/Pool';

@Component({
  selector: 'pancakeswap-pools-cards',
  templateUrl: './pools-cards.component.html',
  styleUrls: ['./pools-cards.component.css']
})
export class PoolsCardsComponent implements OnInit {
  @Input() pools_item!: Pool
  checked: boolean = false 

  constructor() { }

  ngOnInit(): void {
  }

  changeClick(e: any) {
    if (e.target.checked) {
      return this.checked = true
    }
    else {
      return this.checked = false
    }
  }

}
