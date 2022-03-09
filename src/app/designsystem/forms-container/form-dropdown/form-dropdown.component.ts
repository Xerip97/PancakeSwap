import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core'
import { DropdownService } from '../../../shared/services/dropdown/dropdown.service';

interface Dropdown {
  width: number;
  link: string;
}

@Component({
  selector: 'pancakeswap-form-dropdown',
  templateUrl: './form-dropdown.component.html',
  styleUrls: ['./form-dropdown.component.css'],
})
export class FormDropdownComponent implements OnInit {
  @Input() data: any;
  @Output() takenKey = new EventEmitter();
  @Input() firstKey: any;

  _dropdown: Dropdown = {
    width: 200,
    link: '',
  };
  constructor(private dropdownService: DropdownService) {}
  @Input() set dropdown(value: Partial<Dropdown>) {
    this._dropdown = { ...this._dropdown, ...value };
  }

  ngOnInit(): void {}


  takeKey(key: any) {
    this.firstKey = key
    return this.dropdownService.takeKey(key)
  }

  
  addClass() { 
    if (
      document.querySelector('#dropdownMenuLink')?.classList.contains('show')
    ) {
      document
        .querySelector('.dropdown-list_dropdown_a')
        ?.classList.add('border-change');
    } else {
      document
      .querySelector('.dropdown-list_dropdown_a')
      ?.classList.remove('border-change');
    }
  }
 
}
