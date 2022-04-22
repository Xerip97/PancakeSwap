import { Component, Input, OnInit } from '@angular/core';
import { Pool } from '@app/models/Pool';

@Component({
  selector: 'pancakeswap-pools-table',
  templateUrl: './pools-table.component.html',
  styleUrls: ['./pools-table.component.css']
})
export class PoolsTableComponent implements OnInit {
  @Input() pools_item!: Pool
  @Input() checked: boolean = false 

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
