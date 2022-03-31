import { Component, Input, OnInit } from '@angular/core';
import { Farms } from '@app/models/Farms';

@Component({
  selector: 'pancakeswap-farms-table',
  templateUrl: './farms-table.component.html',
  styleUrls: ['./farms-table.component.css']
})
export class FarmsTableComponent implements OnInit {
  @Input() farms_item!: Farms

  
  constructor() { }

  ngOnInit(): void {
  }

}
