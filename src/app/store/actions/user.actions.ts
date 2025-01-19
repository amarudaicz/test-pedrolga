import { Action } from 'mini-rx-store'
import { User } from 'src/app/modules/users/interfaces/user.interface'
import {  UsersActionTypes } from '../interfaces/users.actions.interface'



export class SetError implements Action {
    readonly type = 'SET_ERROR';
    constructor(public payload:{message:string}){};
}


export class SetLoading implements Action {
    readonly type = 'SET_LOADING';
    constructor(public payload:boolean){};
}


export class LoadUsers implements Action {
    readonly type = UsersActionTypes.LOAD_USERS;
}

export class LoadUsersSucces implements Action {
    readonly type = UsersActionTypes.LOAD_USERS_SUCCES;
    constructor(public payload: User[]) {}
}


export class AddUser implements Action {
    readonly type = UsersActionTypes.ADD_USER;
    constructor(public payload: User) {
    }
}

export class AddUserSucces implements Action {
    readonly type = UsersActionTypes.ADD_USER_SUCCES;
    constructor(public payload:User) {
    }
}

export class UpdateUser implements Action {
    readonly type = UsersActionTypes.UPDATE_USER;
    constructor(public payload: User) {
    }

}

export class UpdateUserSucces implements Action {
    readonly type = UsersActionTypes.UPDATE_USER_SUCCES;
    constructor(public payload: User) {
    }
}

export class DeleteUser implements Action {
    readonly type = UsersActionTypes.DELETE_USER;
    constructor(public payload: {id:number}) {
    }
}
export class DeleteUserSucces implements Action {
    readonly type = UsersActionTypes.DELETE_USER;
    constructor(public payload: {id:number}) {
    }
}





export type UsersActions = LoadUsers | AddUser | UpdateUser | DeleteUser


