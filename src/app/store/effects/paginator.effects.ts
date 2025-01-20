import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { catchError, delay, distinctUntilChanged, map, switchMap, take, tap, withLatestFrom } from 'rxjs/operators';
import { Action, Store, actions$, ofType } from 'mini-rx-store';
import {  SetError, SetLoading, } from '../actions/user.actions';  // Asegúrate de importar la acción correcta
import {  SetPage, SetTotalPages } from '../actions/paginator.actions';
import { PaginatorActionsTypes } from '../interfaces/paginator.actions.interface';
import { selectUsersAndPagination } from '../selectors/selectors';
@Injectable()
export class PaginatorEffects {

    constructor(private store: Store) {
      this.store.effect(this.setPageSizeAndPage$)
      this.store.effect(this.setPage$)
    }

    setPageSizeAndPage$ = actions$.pipe(
        ofType(PaginatorActionsTypes.SET_PAGE_SIZE), 
        tap(()=> this.store.dispatch(new SetLoading(true))),
        withLatestFrom(
          this.store.select(selectUsersAndPagination) 
        ),
        map(([action, { usersCount, currentPage }]) => {
          const pageSize = action['payload']; 
          const totalPages = usersCount > 0 ? Math.ceil(usersCount / pageSize) : 1;
          const actionsToDispatch: Action[] = [new SetTotalPages(totalPages)];

          if (currentPage > totalPages) {
            actionsToDispatch.push(new SetPage(totalPages));
          }
      
          return actionsToDispatch; 
        }),
        switchMap(actions => actions),
        delay(300),
        tap(()=> this.store.dispatch(new SetLoading(false))),
        catchError(err => 
          of(new SetError({ message: 'Hubo un error en la paginacion' }))
        )
      );


      setPage$ = actions$.pipe(
        ofType(PaginatorActionsTypes.SET_PAGE),
        distinctUntilChanged(), // Ignora valores repetidos consecutivos
        tap(() => this.store.dispatch(new SetLoading(true))),
        delay(300), // Simula el tiempo de carga
        tap(() => this.store.dispatch(new SetLoading(false)))
      );
      
      
}
