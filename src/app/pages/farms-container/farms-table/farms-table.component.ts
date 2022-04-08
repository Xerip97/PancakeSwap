import { Component, Input, OnInit } from '@angular/core';
import { Farms } from '@app/models/Farms';

@Component({
  selector: 'pancakeswap-farms-table',
  templateUrl: './farms-table.component.html',
  styleUrls: ['./farms-table.component.css']
})
export class FarmsTableComponent implements OnInit {
  @Input() farms_item!: Farms
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
