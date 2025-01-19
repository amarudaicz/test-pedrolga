import { User } from "src/app/modules/users/interfaces/user.interface";
import { Action } from 'mini-rx-store';

export enum UsersActionTypes {
    LOAD_USERS = 'LOAD_USERS',
    ADD_USER = 'ADD_USER',
    UPDATE_USER = 'UPDATE_USER',
    DELETE_USER = 'DELETE_USER',

    LOAD_USERS_SUCCES = 'LOAD_USERS_SUCCES',
    ADD_USER_SUCCES = 'ADD_USER_SUCCES',
    UPDATE_USER_SUCCES ='UPDATE_USER_SUCCES',
    DELETE_USER_SUCCES ='DELETE_USER_SUCCES',
}

export interface LoadUsersAction extends Action {
    type: UsersActionTypes.LOAD_USERS;
    payload: User[];
}

export interface LoadUserSucces extends Action {
    type:UsersActionTypes.LOAD_USERS_SUCCES,
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

export type UsersActions = LoadUsersAction | LoadUserSucces |  AddUserAction | UpdateUserAction | DeleteUserAction;