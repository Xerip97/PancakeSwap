import { Component, Input, OnInit } from '@angular/core';
import { Farms } from '@app/models/Farms';

@Component({
  selector: 'pancakeswap-farms-cards',
  templateUrl: './farms-cards.component.html',
  styleUrls: ['./farms-cards.component.css']
})
export class FarmsCardsComponent implements OnInit {
  @Input() farms_item!: Farms
  checked: boolean = false

  constructor() {
  }

  ngOnInit(): void {
    this.addBorder()
  }
  
  changeClick(e: any) {
    if (e.target.checked) {
      return this.checked = true
    }
    else {
      return this.checked = false
    }
  }

  addBorder() {
    console.log(this.farms_item.id)
    if(this.farms_item.id == 1) {
      let div = document.querySelector('.generic_div')
      div?.classList.add('card-cake')
      div?.classList.remove('top-div')
      div?.classList.add('top-div-card')
    }
  }
}
