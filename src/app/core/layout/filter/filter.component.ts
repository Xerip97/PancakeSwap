import { Component, Input, OnInit, EventEmitter } from '@angular/core';
import { FilterViewService } from '@app/shared/services/filter-view/filter-view.service';
import { data_1 } from 'src/mock/data_1';

interface Filter {
  link1: string;
  link2: string;
  arrayDropdown: Array<any>;
  searchPlaceholder: string;
}

@Component({
  selector: 'pancakeswap-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css'],
})
export class FilterComponent implements OnInit {
  _filter: Filter = {
    link1: '/',
    link2: '/',
    arrayDropdown: data_1,
    searchPlaceholder: 'Search...',
  };

  @Input() set filter(value: Partial<Filter>) {
    this._filter = { ...this._filter, ...value };
  }

  constructor(private filterViewService: FilterViewService) {}

  ngOnInit(): void {
    this.checkPrevious();
    this.filterViewService.checkLocalStorage();
  }

  checkPrevious() {
    let input_card = document.querySelector('#farms_cards');
    let input_table = document.querySelector('#farms_table');
    let card = document.querySelector('.view-card');
    let table = document.querySelector('.view-table');
    if (localStorage.getItem('view') != 'table') {
      if (localStorage.getItem('view') != 'cards') {
        table?.classList.remove('offline');
        card?.classList.remove('active');
        card?.classList.add('offline');
        table?.classList.add('active');
        localStorage.setItem('view', 'table');
        input_table?.setAttribute('checked', '');
      } else {
        card?.classList.remove('offline');
        table?.classList.remove('active');
        table?.classList.add('offline');
        card?.classList.add('active');
        localStorage.setItem('view', 'cards');
        input_card?.setAttribute('checked', '');
      }
    } else {
      table?.classList.remove('offline');
      card?.classList.remove('active');
      card?.classList.add('offline');
      table?.classList.add('active');
      localStorage.setItem('view', 'table');
      input_table?.setAttribute('checked', '');
    }
  }

  activeButton(e: any) {
    if (e.target.checked) {
      let card = document.querySelector('.view-card');
      let table = document.querySelector('.view-table');
      if (e.target.value == 'cards') {
        card?.classList.remove('offline');
        table?.classList.remove('active');
        table?.classList.add('offline');
        card?.classList.add('active');
        localStorage.setItem('view', 'cards');
      } else {
        table?.classList.remove('offline');
        card?.classList.remove('active');
        card?.classList.add('offline');
        table?.classList.add('active');
        localStorage.setItem('view', 'table');
      }
    }
  }
}
