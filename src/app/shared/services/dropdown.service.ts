import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DropdownService {
  constructor() { }
  keyToUse: string = ''

  takeKey (key: any) {
    return this.keyToUse += key
  }

  sortBy(key: any, order = 'asc') {
    key = this.keyToUse;
    const sortOrder = order === 'asc' ? 1 : -1
    return (a: any, b: any) => {
      const A = (typeof a[key] === 'string') ? a[key].toUpperCase() : a[key];
      const B = (typeof b[key] === 'string') ? b[key].toUpperCase() : b[key];
      if (A < B) {
        return sortOrder * -1
      } else if (A > B) {
        return sortOrder * 1
      } else {
        return 0
      }
    }

  }

  callArray(arr: any, key: any) {
    let newData = arr.sort(this.sortBy(key, 'asc'))
    this.keyToUse = ''
    return newData
  }
}
