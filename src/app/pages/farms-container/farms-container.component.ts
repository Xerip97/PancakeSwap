import { Component, OnInit } from '@angular/core';
import { data_1 } from '../../../mock/data_1';
import { data_2 } from '../../../mock/data_2'
import { data_3 } from '../../../mock/data_3'
import { DropdownService } from 'src/app/shared/services/dropdown/dropdown.service';
import { SearchTextService } from 'src/app/shared/services/search-text/search-text.service';
import { PollService } from 'src/app/shared/services/poll/poll.service';

@Component({
  selector: 'pancakeswap-farms-container',
  templateUrl: './farms-container.component.html',
  styleUrls: ['./farms-container.component.css'],
})
export class FarmsContainerComponent implements OnInit {
  data = data_1;
  data_poll = data_3
  keyToUse: string = this.dropdownService.keyToUse
  constructor(private dropdownService: DropdownService, private searchTextService: SearchTextService, private pollService: PollService) { }

  ngOnInit(): void { }

  callSortBy(array: any,key: any) {
    return this.dropdownService.callArray(array, key)

  }

  callgetResult (array: any, key: any) {
   return this.searchTextService.getResult(array, key)
  }

  callopenProposal (array: any) {
    return this.pollService.openProposal(array)
  }
}