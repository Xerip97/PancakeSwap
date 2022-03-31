import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DropdownService {
  constructor() { }
  keyToUse: string = '';

  takeKey(key: any) {
    return (this.keyToUse += key);
  }

  sortBy(key: any, order = 'asc') {
    key = this.keyToUse;
    const sortOrder = order === 'asc' ? 1 : -1;
    return (a: any, b: any) => {
      const A = typeof a[key] === 'string' ? a[key].toUpperCase() : a[key];
      const B = typeof b[key] === 'string' ? b[key].toUpperCase() : b[key];
      if (A < B) {
        return sortOrder * -1;
      } else if (A > B) {
        return sortOrder * 1;
      } else {
        return 0;
      }
    };
  }

  sortByReverse(key: any, order = 'asc') {

    key = this.keyToUse;
    const sortOrder = order === 'asc' ? 1 : -1;
    return (a: any, b: any) => {
      const A = typeof a[key] === 'string' ? a[key].toUpperCase() : a[key];
      const B = typeof b[key] === 'string' ? b[key].toUpperCase() : b[key];
      if (A > B) {
        return sortOrder * -1;
      } else if (A < B) {
        return sortOrder * 1;
      } else {
        return 0;
      }
    };
  }

  callArray(arr: any, key: any) {
    let newData = arr.sort(this.sortBy(key, 'asc'));
    this.keyToUse = '';
    return newData;
  }

  callArrayReversed(arr: any, key: any) {
    if (this.keyToUse != 'id') {
      let newData = arr.sort(this.sortByReverse(key, 'asc'));
      this.keyToUse = '';
      return newData;;
    }
    else {
      let newData = arr.sort(this.sortBy(key, 'asc'));
      this.keyToUse = '';
      return newData;;
    }


  }
}
