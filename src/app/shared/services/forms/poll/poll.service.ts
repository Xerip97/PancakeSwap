import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PollService {
  option: string = ''
  
  constructor() { }

  firstProposal(option: string) {
    this.option = option
  }

  sendProposal(option: string) {
   this.option = option
  }


  openProposal(arr: any) {
    let search = this.option
    return arr.filter(function(obj: any) {
      return Object.keys(obj).some(function(key) {
        return obj[key].toLowerCase().includes(search);
      })
    });
  }

}
