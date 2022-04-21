import { Component, OnInit } from '@angular/core';
import { LucaService } from '@app/shared/services/luca/luca.service';

@Component({
  selector: 'pancakeswap-warning-banner',
  templateUrl: './warning-banner.component.html',
  styleUrls: ['./warning-banner.component.css'],
})
export class WarningBannerComponent implements OnInit {
  luca!: boolean;

  constructor(private lucaService: LucaService) {}

  nasconDino() {
    this.luca = false;
    localStorage.setItem('luca', 'false');
    this.lucaService.getLucaStatus();
  }

  ngOnInit(): void {
    if (!localStorage.getItem('luca')) {
      localStorage.setItem('luca', 'true');
    }
    const temp = JSON.parse(localStorage.getItem('luca') || '');
    if (typeof temp === 'boolean') {
      this.luca = temp;
    }
    try {
      const angelo = name;
      console.log(angelo);
    } catch (err) {
      console.log('angelo errore');
    } finally {
      console.log('ho i miei capelli');
    }
  }
}
