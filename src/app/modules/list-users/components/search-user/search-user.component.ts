import { Component, ViewChild } from '@angular/core';
import { Store } from 'mini-rx-store';
import { debounceTime, distinctUntilChanged, fromEvent, map } from 'rxjs';
import { SetFilterQuery } from 'src/app/store/actions/user.actions';

@Component({
  selector: 'app-search-user',
  templateUrl: './search-user.component.html',
  styleUrls: ['./search-user.component.css']
})
export class SearchUserComponent {

  constructor(private store:Store){

  }
  @ViewChild('inputSearch', { static: true }) inputSearch: any;

  query$ = this.store.select(state=> state['users'].filter.query)


  ngAfterViewInit() {
    fromEvent<Event>(this.inputSearch.nativeElement, 'input')
      .pipe(
        map((event) => (event.target as HTMLInputElement).value),
        debounceTime(300),
        distinctUntilChanged()
      )
      .subscribe((query: string) => {
        this.store.dispatch(new SetFilterQuery(query))
      });
  }



}
