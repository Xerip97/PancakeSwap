import { Component, OnDestroy, OnInit } from '@angular/core';
import { CakeValueService } from '@app/shared/services/pages/cake-value.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'pancakeswap-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit, OnDestroy {
  cakeValue!: number;
  cakeValueSubscription!: Subscription;
  constructor(private cakeValueService: CakeValueService) {}

  ngOnInit(): void {
    this.cakeValueSubscription = this.cakeValueService
      .getCakeValue()
      .subscribe((cakeValue) => (this.cakeValue = cakeValue));
  }

  ngOnDestroy(): void {
    this.cakeValueSubscription.unsubscribe();
  }
}
