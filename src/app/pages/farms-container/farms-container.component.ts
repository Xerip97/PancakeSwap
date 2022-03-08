import { Component, OnInit } from '@angular/core';
import { data_1 } from '../../../mock/data_1';
import { data_2 } from '../../../mock/data_2'
import { DropdownService } from 'src/app/shared/services/dropdown.service';

@Component({
  selector: 'pancakeswap-farms-container',
  templateUrl: './farms-container.component.html',
  styleUrls: ['./farms-container.component.css'],
})
export class FarmsContainerComponent implements OnInit {
  data_1 = data_1;
  data_2 = data_2;
  keyToUse: string = this.dropdownService.keyToUse
  constructor(private dropdownService: DropdownService) { }

  ngOnInit(): void { }

  calltakeKey(key: any) {
    return this.dropdownService.takeKey(key)
  }

  callSortBy(array: any,key: any) {
    return this.dropdownService.callArray(array, key)

  }
}