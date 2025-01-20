import {ReduxDevtoolsExtension, Store, configureStore} from 'mini-rx-store';
import { usersReducer, UsersState } from '../reducers/user.reducer';
import { paginatorReducer, PaginatorState } from '../reducers/paginator.reducer';


export interface AppState{
    users:UsersState,
    paginator:PaginatorState
}


export const store:Store = configureStore({
  
    reducers:{
        users:usersReducer,
        paginator: paginatorReducer
    },

    extensions:[
        new ReduxDevtoolsExtension({
            name: 'MiniRx Showcase',
            maxAge: 25,
            latency: 1000
          })
    ]
})