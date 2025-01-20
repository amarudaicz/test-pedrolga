import { RoleUser, User } from "src/app/modules/users/interfaces/user.interface"
import { Action, Reducer } from "mini-rx-store";
import { UsersActionTypes, UsersActions } from "../interfaces/users.actions.interface";

export interface UsersState {
    allUsers: User[],
    loading: boolean,
    err: string | null,
    offline:boolean,
    filter: {            // Criterios de filtro
        role: RoleUser|null;   // Rol seleccionado
        query?: string;   // Texto de búsqueda
    };
}

export const initialState: UsersState = {
    allUsers: [],
    loading: false,
    err: null,
    offline:false,
    filter: {
        role: null,
        query: '',
    },
}


export const usersReducer: Reducer<UsersState> = (
    state: UsersState = initialState,
    action: Action
): UsersState => {
    switch (action.type) {

        case 'SET_LOADING':
            return {
                ...state,
                loading: action['payload']
            };

        case 'SET_ERROR':
            return {
                ...state,
                err: action['payload'],
                loading: false
            };

            case 'TOGGLE_OFFLINE':
                return {
                    ...state,
                    offline:!state.offline
                };

        case 'SET_FILTER_ROLE':
            return {
                ...state,
                filter: { ...state.filter, role: action['payload'] },
            };

        case 'SET_FILTER_QUERY':
            return {
                ...state,
                filter: { ...state.filter, query: action['payload'] },
            };

        case 'CLEAR_FILTERS':
            return {
                ...state,
                filter: {role:null, query:'' },
            };

        case UsersActionTypes.LOAD_USERS:
        case UsersActionTypes.UPDATE_USER:
        case UsersActionTypes.ADD_USER:
        case UsersActionTypes.DELETE_USER:
            return state


        case UsersActionTypes.LOAD_USERS_SUCCESS:
            return {
                ...state,
                allUsers: action['payload'],
                loading: false
            };



        case UsersActionTypes.ADD_USER_SUCCESS:
            return {
                ...state,
                allUsers: [...state.allUsers, action['payload']],
                loading: false
            }


        case UsersActionTypes.UPDATE_USER_SUCCESS: {
            const index = state.allUsers.findIndex((user) => user.id === action['payload'].id);
            console.log(index);
            if (index === -1) {
                return state;
            }

            const updatedUsers = [...state.allUsers];
            updatedUsers[index] = action['payload'];

            return {
                ...state,
                allUsers: updatedUsers,
                loading: false
            };
        }

        case UsersActionTypes.DELETE_USER_SUCCESS: {
            const updatedUsers = state.allUsers.filter((user) => user.id !== action['payload']);

            return {
              ...state,
              allUsers: updatedUsers,
              loading: false
            };
          }

        default:
            return state;
    }
};

