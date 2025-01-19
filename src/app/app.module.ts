import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { StoreModule } from 'mini-rx-store-ng';
import { store } from './store/config/config';
import { usersReducer } from './store/reducers/user.reducer';
import { ReduxDevtoolsExtension } from 'mini-rx-store';
import { UsersService } from './modules/users/service/users/users.service';
import { UsersEffects } from './store/effects/users.effects';
import { AppRoutingModule } from './app-routing.module';
import { RouterModule } from '@angular/router';
import { UsersModule } from './modules/users/users.module';
import { ListUsersModule } from './modules/list-users/list-users.module';
import { AddUserModule } from './modules/add-user/add-user.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    UsersModule,
    ListUsersModule,
    AddUserModule,
    AppRoutingModule,
    StoreModule.forRoot({
      reducers:{
        users:usersReducer 
      },
      extensions:[
        new ReduxDevtoolsExtension({
          name: 'MiniRx',
          maxAge: 25,
          latency: 1000
        })
      ],
    })

  ],
  providers: [UsersService, UsersEffects],
  bootstrap: [AppComponent]
})
export class AppModule { }
