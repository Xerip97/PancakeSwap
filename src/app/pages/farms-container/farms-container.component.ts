import { Component, OnInit } from '@angular/core';
import { Farms } from '@app/models/Farms';
import { farms } from 'src/mock/farmsMock';

@Component({
  selector: 'pancakeswap-farms-container',
  templateUrl: './farms-container.component.html',
  styleUrls: ['./farms-container.component.css'],
})
export class FarmsContainerComponent implements OnInit {
  farms: Farms[] = farms
  constructor(
   
  ) {}

  ngOnInit(): void {
  }

 
}
