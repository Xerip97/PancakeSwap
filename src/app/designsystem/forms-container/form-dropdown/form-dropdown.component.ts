import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core'
import { DropdownService } from '../../../shared/services/forms/dropdown/dropdown.service';

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
  addressState: boolean = false

  _dropdown: Dropdown = {
    width: 200,
    link: '',
  };
  constructor(private dropdownService: DropdownService) {}
  @Input() set dropdown(value: Partial<Dropdown>) {
    this._dropdown = { ...this._dropdown, ...value };
  }

  ngOnInit(): void {
  }


  takeKey(key: any) {
    this.firstKey = key
    // this.addClass('closed')
    return this.dropdownService.takeKey(key)
  }

  
  addClass() {
    const elem = document.querySelector('.dropdown-list_dropdown_a');
      if (!this.addressState) {
        this.addressState = true;
        elem?.classList.add('border-change');
      } else {
        this.addressState = false;
        elem?.classList.remove('border-change');
    
    }
  }

  onFocusOutEvent(){
    this.addressState = false;
    document.querySelector('.dropdown-list_dropdown_a')?.classList.remove('border-change');
  }
  
 
}
