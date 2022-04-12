import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FilterViewService {

  constructor() { }

  checkLocalStorage() {
    if(localStorage.getItem('view') != 'table') {
     if(localStorage.getItem('view') != 'cards'){
       return true
     }
     else {
       return false
     }
    }
    else {
      return true
    }
  }
}
