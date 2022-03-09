import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'pancakeswap-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  tempValue: number;
  constructor() {
    this.tempValue = Math.floor(Math.random() * (10000 - 8000) + 8000);
    setInterval(async () => {
      this.tempValue = Math.floor(this.tempValue + (Math.random() * 100 - 50));
    }, 6000);
  }

  ngOnInit(): void {}
}
