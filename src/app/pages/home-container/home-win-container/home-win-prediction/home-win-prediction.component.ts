import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'pancakeswap-home-win-prediction',
  templateUrl: './home-win-prediction.component.html',
  styleUrls: ['./home-win-prediction.component.css']
})
export class HomeWinPredictionComponent implements OnInit {
  predicitonLabel: string = ''
  

  constructor() { }

  ngOnInit(): void {
    setTimeout(() => {
      let div = document.querySelector('.loading-number')
      div?.classList.remove('loading-number')
      this.predicitonLabel = '$730 million'}, 2000);
  }


}
