import { Component, OnInit } from '@angular/core';
import { Farms } from '@app/models/Farms';
import { SliderService } from '@app/shared/services/forms/slider/slider.service';
import { DropdownService } from '@app/shared/services/forms/dropdown/dropdown.service';
import { farms } from 'src/mock/farmsMock';
import { dropDown_Farms } from 'src/mock/farmsDropDown';

@Component({
  selector: 'pancakeswap-farms-container',
  templateUrl: './farms-container.component.html',
  styleUrls: ['./farms-container.component.css'],
})
export class FarmsContainerComponent implements OnInit {
  farms: Farms[] = farms
  farms_dropdown: Array<any> = dropDown_Farms
  keyToUse: string = this.dropdownService.keyToUse


  constructor(
   private sliderService: SliderService,
   private dropdownService : DropdownService
  ) {}

  ngOnInit(): void {
  }
 
  callIfCheck() {
   return this.sliderService.checked
  }

  callSortBy(arr: Farms[], key: string) {
   return this.dropdownService.callArray(arr, key)
  }
 
}
