import { Component, OnInit } from '@angular/core';
import { CakeValueService } from '@app/shared/services/pages/cake-value.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'pancakeswap-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
 cakeValueObs$!: Observable<number>;
  constructor(private cakeValueService: CakeValueService) { }

 

  ngOnInit(): void {
    this.cakeValueObs$ = this.cakeValueService.getCakeValue();
  }

}
