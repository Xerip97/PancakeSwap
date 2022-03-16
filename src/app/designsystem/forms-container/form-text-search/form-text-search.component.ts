import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { debounceTime, distinctUntilChanged, Subject } from 'rxjs';
import { SearchTextService } from '@app/shared/services/forms/search-text/search-text.service';

@Component({
  selector: 'pancakeswap-form-text-search',
  templateUrl: './form-text-search.component.html',
  styleUrls: ['./form-text-search.component.css']
})
export class FormTextSearchComponent implements OnInit {
  @Output() value = new EventEmitter
  private subjectKeyUp = new Subject<any>()

  constructor(private searchTextService : SearchTextService ) { }

  ngOnInit(): void {
    this.subjectKeyUp
    .pipe(debounceTime(1000), distinctUntilChanged()).subscribe((d) => this.callTakeValue(d))
  }


  onSearch($event: any) {
  const search = $event.target.value;
  this.subjectKeyUp.next(search)
  }

  
  callTakeValue (value: string) {
    return this.searchTextService.takeValue(value)
  }
 
}
