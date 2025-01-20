import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MainUsersComponent } from './components/main-users/main-users.component';
import { LoaderModule } from '../loader/loader.module';



@NgModule({
  declarations: [
    MainUsersComponent
  ],
  imports: [
    RouterModule,
    CommonModule,
    LoaderModule
  ] 
})

export class UsersModule {  }
