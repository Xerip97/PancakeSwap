import { Component, OnInit, ViewChild, ElementRef, Renderer2 } from '@angular/core';
import { data_1 } from '../../../mock/data_1';
import { data_2 } from '../../../mock/data_2';
import { data_3 } from '../../../mock/data_3';
import { data_4 } from '../../../mock/data_4';
import { DropdownService } from '@app/shared/services/forms/dropdown/dropdown.service';
import { SearchTextService } from '@app/shared/services/forms/search-text/search-text.service';
import { PollService } from '@app/shared/services/forms/poll/poll.service';
import { TradeTextService } from '@app/shared/services/forms/trade-text/trade-text.service';
import { SliderService } from '../../shared/services/forms/slider/slider.service';


@Component({
  selector: 'pancakeswap-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
  
  data = data_1;
  data_poll = data_3;
  data_trade = data_4;
  keyToUse: string = this.dropdownService.keyToUse;

  constructor(
    private dropdownService: DropdownService,
    private searchTextService: SearchTextService,
    private pollService: PollService,
    private tradeTextService:TradeTextService,
    private sliderService: SliderService
  ) { }

  ngOnInit() {
  }

   //DROPDOWN SORT SERVICE

   callSortBy(array: any, key: any) {
    return this.dropdownService.callArray(array, key);
  }

  //SEARCH SERVICE

  callgetResult(array: any, key: any) {
    return this.searchTextService.getResult(array, key);
  }

  //POLL SERVICE

  callopenProposal(array: any) {
    return this.pollService.openProposal(array);
  }

  //SLIDER SERVICE

   callIfCheck(){
     return this.sliderService.checked
   }

   
 //TEXT TRADE SERVICE -- WORKING PROGRESS

  // callPassNumber(event: any){
  //   return this.tradeTextService.passNumber(event)
  // }

 
  // callCheck(arr: any){
  //   return this.tradeTextService.checkOptions(arr)
  // }

  //  callCalculateNumber() {
  //   return this.tradeTextService.calculateNumber().toString()

  //  }

 

}
