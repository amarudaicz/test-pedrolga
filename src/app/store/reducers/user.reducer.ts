import { User } from "src/app/modules/users/interfaces/user.interface"
import { Action, Reducer } from "mini-rx-store";
import { UsersActionTypes, UsersActions } from "../interfaces/users.actions.interface";

export interface UsersState {
    users: User[],
    loading: boolean,
    err: string | null
}

export const initialState: UsersState = {
    users: [],
    loading: false,
    err: null
}


export const usersReducer: Reducer<UsersState> = (
    state: UsersState = initialState,
    action: Action
): UsersState => {
    switch (action.type) {

        case 'SET_LOADING':
            return {
                ...state,
                loading: true
            };

        case 'SET_ERROR':
            return {
                ...state,
                err: action['payload'],
                loading: false
            };

        case UsersActionTypes.LOAD_USERS:
        case UsersActionTypes.UPDATE_USER:
        case UsersActionTypes.ADD_USER:
        case UsersActionTypes.DELETE_USER:
            return state


        case UsersActionTypes.LOAD_USERS_SUCCES:
            return {
                ...state,
                users: action['payload'],
                loading: false
            };



        case UsersActionTypes.ADD_USER_SUCCES:
            return {
                ...state,
                users: [...state.users, action['payload']],
                loading: false
            }


        case UsersActionTypes.UPDATE_USER_SUCCES: {
            const index = state.users.findIndex((user) => user.id === action['payload'].id);

            if (index === -1) {
                return state;
            }

            const updatedUsers = [...state.users];
            updatedUsers[index] = action['payload'];

            return {
                ...state,
                users: updatedUsers,
                loading: false
            };
        }

        case UsersActionTypes.DELETE_USER_SUCCES: {
            const updatedUsers = state.users.filter((user) => user.id !== action['payload'].id);

            if (updatedUsers.length === state.users.length) {
                return state;
            }

            return {
                ...state,
                users: updatedUsers,
            };
        }

        default:
            return state;
    }
};

