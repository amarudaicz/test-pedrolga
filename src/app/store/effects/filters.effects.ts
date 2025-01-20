import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { delay, map, switchMap, tap, withLatestFrom } from 'rxjs/operators';
import { Action, Store, actions$, ofType } from 'mini-rx-store';
import { SetPage, SetTotalPages } from '../actions/paginator.actions';
import { UsersActionTypes } from '../interfaces/users.actions.interface';
import { selectFilteredPaginatedUsers, selectAllUsers, selectFilters, selectPaginatorState } from '../selectors/selectors';
import { SetLoading } from '../actions/user.actions';

@Injectable()
export class FilterEffects {
  constructor(private store: Store) {
    this.store.effect(this.setTotalPages$);
  }

  setTotalPages$ = actions$.pipe(
    ofType('SET_FILTER_QUERY', 'SET_FILTER_ROLE', 'CLEAR_FILTERS'),
    tap(()=> this.store.dispatch(new SetLoading(true))),
    withLatestFrom(
      this.store.select(selectFilteredPaginatedUsers), 
      this.store.select(selectPaginatorState) 
    ),
    map(([action, filteredUsers, paginatorState]) => {
      // Filtrar usuarios según los filtros actuales
        const totalPages = filteredUsers.count > 0 ? Math.ceil(filteredUsers.count / paginatorState.pageSize) : 1;
        
        const actionsToDispatch: Action[] = [new SetTotalPages(totalPages)];
          if (paginatorState.currentPage > totalPages) {
            actionsToDispatch.push(new SetPage(totalPages));
          }
      
        return actionsToDispatch; 
    }),
    switchMap(actions=>actions),
    delay(300),
    tap(()=> this.store.dispatch(new SetLoading(false))),

  );

  
}
