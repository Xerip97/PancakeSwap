import { Component, OnInit } from '@angular/core';
import { pools } from 'src/mock/poolsMock';
import { dropDown_Pools } from 'src/mock/poolsDropDown';
import { Pool } from '@app/models/Pool';
import { SliderService } from '@app/shared/services/forms/slider/slider.service';
import { DropdownService } from '@app/shared/services/forms/dropdown/dropdown.service';
import { SearchTextService } from '@app/shared/services/forms/search-text/search-text.service';
import { FilterViewService } from '@app/shared/services/filter-view/filter-view.service';

@Component({
  selector: 'pancakeswap-pools-container',
  templateUrl: './pools-container.component.html',
  styleUrls: ['./pools-container.component.css'],
})
export class PoolsContainerComponent implements OnInit {
  pools: Pool[] = pools;
  pools_dropdown: Array<any> = dropDown_Pools;
  keyToUse: string = this.dropdownService.keyToUse;


  constructor(    
    private sliderService: SliderService,
    private dropdownService: DropdownService,
    private searchService: SearchTextService,
    private filterViewService: FilterViewService) {}

  ngOnInit(): void {}

  callIfCheck() {
    return this.sliderService.checked;
  }

  callSortBy(arr: Pool[], key: string) {
      return this.dropdownService.callArrayReversed(arr, key);
  }

  callgetResult(arr: Pool[], key: string) {
    return this.searchService.getResultv3(arr, key);
  }

  callView() {
    return this.filterViewService.checkLocalStorage()
  }

    topFunction() {
      let div = document.querySelector('.generic_div')
      return div?.scrollIntoView()
  }
}
