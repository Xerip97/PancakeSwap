import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

interface Dropdown {
  title: string;
  label_1: string;
  label_2: string;
  label_3: string;
  label_4: string;
  width: number;
}

@Component({
  selector: 'pancakeswap-form-dropdown',
  templateUrl: './form-dropdown.component.html',
  styleUrls: ['./form-dropdown.component.css'],
})
export class FormDropdownComponent implements OnInit {
  _dropdown: Dropdown = {
    title: '',
    label_1: '',
    label_2: '',
    label_3: '',
    label_4: '',
    width: 200,
  };
  constructor() {}
  @Input() set dropdown(value: Partial<Dropdown>) {
    this._dropdown = { ...this._dropdown, ...value };
  }

  ngOnInit(): void {}
}
