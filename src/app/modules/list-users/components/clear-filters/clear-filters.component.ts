import { Component } from '@angular/core';
import { Store } from 'mini-rx-store';
import { ClearFilters } from 'src/app/store/actions/user.actions';

@Component({
  selector: 'app-clear-filters',
  templateUrl: './clear-filters.component.html',
  styleUrls: ['./clear-filters.component.css']
})
export class ClearFiltersComponent {


  constructor(private store:Store){

  }

  clearFilters(){
    this.store.dispatch(new ClearFilters())
  }
}
