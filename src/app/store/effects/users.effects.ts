import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, map, switchMap, tap } from 'rxjs/operators';
import { Action, Store, actions$, ofType } from 'mini-rx-store';
import { UsersActionTypes } from '../interfaces/users.actions.interface';
import { AddUserSucces, DeleteUser, DeleteUserSucces, LoadUsersSucces, SetError, SetLoading, UpdateUserSucces } from '../actions/user.actions';  // Asegúrate de importar la acción correcta
import { UsersService } from 'src/app/modules/users/service/users/users.service';
  
@Injectable()
export class UsersEffects {

  constructor(private userService: UsersService, private store:Store ) {
    this.store.effect(this.loadUsers$)
    this.store.effect(this.addUser$)
    this.store.effect(this.updateUser$)
    this.store.effect(this.deleteUser$)
  }

  loadUsers$ = actions$.pipe(
    ofType(UsersActionTypes.LOAD_USERS), 
    switchMap(() =>
      this.userService.getUsers().pipe(
        switchMap((users) => [
            new SetLoading(true),
            new LoadUsersSucces(users), // Acción de éxito
          ]),
          catchError((err) => of(new SetError({message:err})))

      )
    )
  );

  addUser$ = actions$.pipe(
    ofType(UsersActionTypes.ADD_USER), 
    switchMap((action) =>
      this.userService.updateUser(action['payload']).pipe(
        switchMap((user) => [
            new SetLoading(true),
            new AddUserSucces(user)
          ]),
        catchError((err) => of(new SetError({message:err})))
      )
    )
  );

  updateUser$ = actions$.pipe(
    ofType(UsersActionTypes.UPDATE_USER), 
    switchMap((action) =>
      this.userService.updateUser(action['payload']).pipe(
        switchMap((user) => [
          new SetLoading(true),
          new UpdateUserSucces(user)
        ]),
        catchError((err) => of(new SetError({message:err})))
      )
    )
  );

  deleteUser$ = actions$.pipe(
    ofType(UsersActionTypes.DELETE_USER), 
    switchMap((action) =>
      this.userService.deleteUser(action['payload']).pipe(
        switchMap((id) => [
          new SetLoading(true),
          new DeleteUserSucces({id})
        ]),
        catchError((err) => of(new SetError({message:err})))
      )
    )
  );

}
