import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MainUsersComponent } from './components/main-users/main-users.component';



@NgModule({
  declarations: [
    MainUsersComponent
  ],
  imports: [
    RouterModule,
    CommonModule
  ] 
})

export class UsersModule {  }
