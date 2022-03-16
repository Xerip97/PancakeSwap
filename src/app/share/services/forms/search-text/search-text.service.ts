
import { Injectable } from '@angular/core';
import { data_1 } from '../../../../../mock/data_1'

@Injectable({
  providedIn: 'root'
})
export class SearchTextService {
  arraySearched: Array<any> = []
  value: string = ''
  constructor() { }

  takeValue(value: string) {
    this.value = value
    console.log(this.value)
  }

  getResult(arr: any, key:any) {
    let search = this.value
    let keyUse = key
    return arr.filter(function(obj: any) {
      return Object.keys(obj).some(function(key = keyUse) {
        return obj[key].toLowerCase().includes(search);
      })
    });
  }
     


}
