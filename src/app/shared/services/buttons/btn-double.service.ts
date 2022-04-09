import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BtnDoubleService {
  isFinished: boolean = true

  constructor() { }
   
  checkButton(bool: boolean) {
    if (!bool) {
      return this.isFinished = bool
      
    }
    else {
      return this.isFinished = bool
    }
  }
  
  returnValue(bool: boolean) {
    return bool == this.isFinished
  }

}
