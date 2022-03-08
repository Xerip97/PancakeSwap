import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DropdownService {
  constructor() {}

  sortBY(element: any) {
    return element.sort();
  }
}
