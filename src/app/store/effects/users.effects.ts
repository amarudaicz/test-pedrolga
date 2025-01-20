import { Injectable } from '@angular/core';
import { Observable, of, timer } from 'rxjs';
import { catchError, map, switchMap, tap, withLatestFrom } from 'rxjs/operators';
import { Action, Store, actions$, ofType } from 'mini-rx-store';
import { UsersActionTypes } from '../interfaces/users.actions.interface';
import { AddUserSuccess, DeleteUser, DeleteUserSuccess, LoadUsersSuccess, SetError, SetLoading, UpdateUserSuccess } from '../actions/user.actions';  // Asegúrate de importar la acción correcta
import { UsersService } from 'src/app/modules/users/service/users/users.service';
import { PaginatorState } from '../reducers/paginator.reducer';
import { SetTotalPages } from '../actions/paginator.actions';

@Injectable()
export class UsersEffects {

  constructor(private userService: UsersService, private store: Store) {
    this.store.effect(this.loadUsers$)
    this.store.effect(this.addUser$)
    this.store.effect(this.updateUser$)
    this.store.effect(this.deleteUser$)
  }

  loadUsers$ = actions$.pipe(
    ofType(UsersActionTypes.LOAD_USERS),
    tap(() => this.store.dispatch(new SetLoading(true))),
    withLatestFrom(this.store.select((state) => state['paginator'])), // Combinamos las $ACTIONS con el estado del paginador
    switchMap(([action, paginatorState]: [any, PaginatorState]) => {
      const { currentPage, pageSize } = paginatorState; // Obtén los valores del paginador
      return this.userService.getUsers(currentPage, pageSize).pipe(
        tap(users => console.log(users)),
        switchMap((users) => [
          new SetTotalPages(Math.ceil(users.length / pageSize)),
          new LoadUsersSuccess(users)
        ]),

        catchError((err) => of(new SetError({ message: 'Ocurrió un error al cargar los usuarios' })))
      )}
    )
  );

  addUser$ = actions$.pipe(
    ofType(UsersActionTypes.ADD_USER),
    tap(() => this.store.dispatch(new SetLoading(true))),
    switchMap((action) =>
      this.userService.addUser(action['payload']).pipe(
        switchMap((user) => {
          user.id = Date.now()
          return [
            new AddUserSuccess(user)
          ];
        }),
        // tap(()=> alert('User created successfully')),
        catchError((err) => of(new SetError({ message: 'Ocurrió un error al intentar crear el usuario' })))
      )
    )
  );

  updateUser$ = actions$.pipe(
    ofType(UsersActionTypes.UPDATE_USER),
    tap(() => this.store.dispatch(new SetLoading(true))),
    switchMap((action) =>
      this.userService.updateUser(action['payload']).pipe(
        switchMap((user) => {
          
          return [
            new UpdateUserSuccess(user)
          ]
        }),
        // tap(()=> alert('User updated successfully')),
        catchError((err) => of(new SetError({ message: 'Ocurrió un error al intentar actualizar el usuario' })))
      )
    )
  );

  deleteUser$ = actions$.pipe(
    ofType(UsersActionTypes.DELETE_USER),
    tap(() => this.store.dispatch(new SetLoading(true))),
    switchMap((action) =>
      this.userService.deleteUser(action['payload']).pipe(
        switchMap(() => {
          return [
            new DeleteUserSuccess(action['payload'])
          ]
        }),
        // tap(()=> alert('User deleted successfully')),
        catchError((err) => {
          console.error(err);
          return of(new SetError({ message: 'Ocurrió un error al intentar eliminar el usuario' }));
        })
      )
    )
  );


}
