import { Component, OnInit } from '@angular/core';
import { Farms } from '@app/models/Farms';
import { SliderService } from '@app/shared/services/forms/slider/slider.service';
import { DropdownService } from '@app/shared/services/forms/dropdown/dropdown.service';
import { farms } from 'src/mock/farmsMock';
import { dropDown_Farms } from 'src/mock/farmsDropDown';
import { SearchTextService } from '@app/shared/services/forms/search-text/search-text.service';

@Component({
  selector: 'pancakeswap-farms-container',
  templateUrl: './farms-container.component.html',
  styleUrls: ['./farms-container.component.css'],
})
export class FarmsContainerComponent implements OnInit {
  farms: Farms[] = farms;
  farms_dropdown: Array<any> = dropDown_Farms;
  keyToUse: string = this.dropdownService.keyToUse;

  constructor(
    private sliderService: SliderService,
    private dropdownService: DropdownService,
    private searchService: SearchTextService
  ) {}

  ngOnInit(): void {
    this.searchService.value = '';
  }

  callIfCheck() {
    return this.sliderService.checked;
  }

  callSortBy(arr: Farms[], key: string) {
      return this.dropdownService.callArrayReversed(arr, key);
  }

  callgetResult(arr: Farms[], key: string) {
    return this.searchService.getResultv2(arr, key);
  }
}
