import { User } from "src/app/modules/users/interfaces/user.interface";
import { Action } from 'mini-rx-store';

export enum UsersActionTypes {
    LOAD_USERS = 'LOAD_USERS',
    ADD_USER = 'ADD_USER',
    UPDATE_USER = 'UPDATE_USER',
    DELETE_USER = 'DELETE_USER',

    LOAD_USERS_SUCCESS = 'LOAD_USERS_SUCCESS',
    ADD_USER_SUCCESS = 'ADD_USER_SUCCESS',
    UPDATE_USER_SUCCESS ='UPDATE_USER_SUCCESS',
    DELETE_USER_SUCCESS ='DELETE_USER_SUCCESS',
}

export interface LoadUsersAction extends Action {
    type: UsersActionTypes.LOAD_USERS;
    payload: User[];
}

export interface LoadUserSuccess extends Action {
    type:UsersActionTypes.LOAD_USERS_SUCCESS,
    payload:User[]
}

export interface AddUserAction extends Action {
    type: UsersActionTypes.ADD_USER;
    payload: User;
}

export interface UpdateUserAction extends Action {
    type: UsersActionTypes.UPDATE_USER;
    payload: User;
}

export interface DeleteUserAction extends Action {
    type: UsersActionTypes.DELETE_USER;
    payload: {id:number};
}

export type UsersActions = LoadUsersAction | LoadUserSuccess |  AddUserAction | UpdateUserAction | DeleteUserAction;