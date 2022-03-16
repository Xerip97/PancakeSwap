import { Component, Input, OnInit } from '@angular/core';
import { SliderService } from '@app/shared/services/forms/slider/slider.service';

interface TypeSlider {
  type: 'forms' | 'footer';
}

@Component({
  selector: 'pancakeswap-form-slider',
  templateUrl: './form-slider.component.html',
  styleUrls: ['./form-slider.component.css']
})
export class FormSliderComponent implements OnInit {

  _typeslider: TypeSlider =  {type: 'forms'}

  constructor(private sliderService : SliderService) { }

 @Input() set typeslider(value: Partial<TypeSlider>) {
    this._typeslider = {...this._typeslider, ...value} 
  }

  ngOnInit(): void {
  }

  callSliderOn(event: any){
    return this.sliderService.sliderOn(event)
  }



}
