import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { DropdownService } from '../../../shared/services/dropdown.service'

interface Dropdown {
  title: string;
  width: number;
  link: string;
}

@Component({
  selector: 'pancakeswap-form-dropdown',
  templateUrl: './form-dropdown.component.html',
  styleUrls: ['./form-dropdown.component.css'],
})
export class FormDropdownComponent implements OnInit {
  @Input() data: any
  @Output() takenKey = new EventEmitter

  _dropdown: Dropdown = {
    title: '',
    width: 200,
    link: ''
  };

  constructor(private dropdownService: DropdownService) {}
  @Input() set dropdown(value: Partial<Dropdown>) {
    this._dropdown = { ...this._dropdown, ...value };
  }

  ngOnInit(): void {}

  takeKey(key: any) {
    this.takenKey.emit(key)
  }
}
