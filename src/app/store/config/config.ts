import {ReduxDevtoolsExtension, Store, configureStore} from 'mini-rx-store';
import { usersReducer } from '../reducers/user.reducer';

export const store:Store = configureStore({
  
    reducers:{
        users:usersReducer
    },

    extensions:[
        new ReduxDevtoolsExtension({
            name: 'MiniRx Showcase',
            maxAge: 25,
            latency: 1000
          })
    ]
})