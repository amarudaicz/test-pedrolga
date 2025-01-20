import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { StoreModule } from 'mini-rx-store-ng';
import { AppState, store } from './store/config/config';
import { usersReducer } from './store/reducers/user.reducer';
import { ReduxDevtoolsExtension } from 'mini-rx-store';
import { UsersService } from './modules/users/service/users/users.service';
import { UsersEffects } from './store/effects/users.effects';
import { AppRoutingModule } from './app-routing.module';
import { RouterModule } from '@angular/router';
import { UsersModule } from './modules/users/users.module';
import { ListUsersModule } from './modules/list-users/list-users.module';
import { AddUserModule } from './modules/add-user/add-user.module';
import { paginatorReducer } from './store/reducers/paginator.reducer';
import { PaginatorEffects } from './store/effects/paginator.effects';
import { FilterEffects } from './store/effects/filters.effects';
import { EditUserModule } from './modules/edit-user/edit-user.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule,
    UsersModule,
    AddUserModule,
    ListUsersModule,
    EditUserModule,
    AppRoutingModule,
    StoreModule.forRoot<AppState>({
      reducers:{
        users:usersReducer,
        paginator:paginatorReducer
      },
      extensions:[
        new ReduxDevtoolsExtension({
          name: 'MiniRx',
          maxAge: 250,
          latency: 2000
        })
      ],
    })

  ],
  providers: [UsersService, UsersEffects, PaginatorEffects, FilterEffects],
  bootstrap: [AppComponent]
})
export class AppModule { }
