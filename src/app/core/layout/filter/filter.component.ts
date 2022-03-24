import { Component, Input, OnInit } from '@angular/core';
import { data_1 } from 'src/mock/data_1'

interface Filter {
link1: string,
link2: string,
arrayDropdown: Array<any>,
searchPlaceholder: string
}

@Component({
  selector: 'pancakeswap-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit {

  _filter: Filter = {
    link1: '/',
    link2: '/',
    arrayDropdown: data_1,
    searchPlaceholder: 'Search...'
  }

  @Input() set filter(value: Partial <Filter>)  {
    this._filter = { ...this._filter, ...value}
  }

  constructor() { }

  ngOnInit(): void {
  }

}
