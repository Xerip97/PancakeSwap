import { Component, OnInit } from '@angular/core';
import { CakeValueService } from '@app/shared/services/pages/cake-value.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'pancakeswap-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  constructor(private cakeValueService: CakeValueService) {}

  cakeValueObs$!: Observable<number>;

  ngOnInit(): void {
    this.cakeValueObs$ = this.cakeValueService.getCakeValue();
  }
}
