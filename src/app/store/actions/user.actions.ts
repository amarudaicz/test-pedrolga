import { Action } from 'mini-rx-store'
import { RoleUser, User } from 'src/app/modules/users/interfaces/user.interface'
import { UsersActionTypes } from '../interfaces/users.actions.interface'



export class SetError implements Action {
    readonly type = 'SET_ERROR';
    constructor(public payload: { message: string }) { };
}

export class SetLoading implements Action {
    readonly type = 'SET_LOADING';
    constructor(public payload: boolean) { };
}

export class ToggleOffline implements Action {
    readonly type = 'TOGGLE_OFFLINE';
}

export class SetFilterRole implements Action {
    readonly type = 'SET_FILTER_ROLE';
    constructor(public payload: RoleUser | undefined) { } // Rol seleccionado
}

export class SetFilterQuery implements Action {
    readonly type = 'SET_FILTER_QUERY';
    constructor(public payload: string) { } // Texto de búsqueda
}

export class ClearFilters implements Action {
    readonly type = 'CLEAR_FILTERS';
}

export class LoadUsers implements Action {
    readonly type = UsersActionTypes.LOAD_USERS;
}

export class LoadUsersSuccess implements Action {
    readonly type = UsersActionTypes.LOAD_USERS_SUCCESS;
    constructor(public payload: User[]) { }
}


export class AddUser implements Action {
    readonly type = UsersActionTypes.ADD_USER;
    constructor(public payload: User) {
    }
}

export class AddUserSuccess implements Action {
    readonly type = UsersActionTypes.ADD_USER_SUCCESS;
    constructor(public payload: User) {
    }
}

export class UpdateUser implements Action {
    readonly type = UsersActionTypes.UPDATE_USER;
    constructor(public payload: User) {
    }

}

export class UpdateUserSuccess implements Action {
    readonly type = UsersActionTypes.UPDATE_USER_SUCCESS;
    constructor(public payload: User) {
    }
}

export class DeleteUser implements Action {
    readonly type = UsersActionTypes.DELETE_USER;
    constructor(public payload:  number ) {
    }
}

export class DeleteUserSuccess implements Action {
    readonly type = UsersActionTypes.DELETE_USER_SUCCESS;
    constructor(public payload:  number ) {
    }
}






export type UsersActions = LoadUsers | AddUser | UpdateUser | DeleteUser


