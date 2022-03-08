import { Component, OnInit } from '@angular/core';
import { data } from '../../../mock/data'

@Component({
  selector: 'pancakeswap-farms-container',
  templateUrl: './farms-container.component.html',
  styleUrls: ['./farms-container.component.css']
})
export class FarmsContainerComponent implements OnInit {
  data = data

  constructor() { }

  ngOnInit(): void {
  }

}
