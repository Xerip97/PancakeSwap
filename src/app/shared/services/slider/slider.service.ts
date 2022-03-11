import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SliderService {
  checked: boolean = false
  constructor() { }


  sliderOn(event: any) {
    return this.checked = event.target.checked
  }
}
