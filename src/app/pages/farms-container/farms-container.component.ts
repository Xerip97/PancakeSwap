import { Component, OnInit } from '@angular/core';
import { data } from '../../../mock/data';
import { DropdownService } from 'src/app/shared/services/dropdown.service';

@Component({
  selector: 'pancakeswap-farms-container',
  templateUrl: './farms-container.component.html',
  styleUrls: ['./farms-container.component.css'],
})
export class FarmsContainerComponent implements OnInit {
  data = data;
  keyToUse: string = this.dropdownService.keyToUse
  constructor(private dropdownService: DropdownService) { }

  ngOnInit(): void { }

  calltakeKey(key: any) {
    return this.dropdownService.takeKey(key)
  }

  callSortBy(key: any) {
    return this.dropdownService.callArray(data, key)

  }
}