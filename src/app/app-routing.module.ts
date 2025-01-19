import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainUsersComponent } from './modules/users/components/main-users/main-users.component';
import { MainListUsersComponent } from './modules/list-users/components/main-list-users/main-list-users.component';
import { MainAddUserComponent } from './modules/add-user/components/main-add-user/main-add-user.component';

const routes: Routes = [

  {
    path: '',
    component: MainUsersComponent,
    children: [
      {
        path: '',
        component:MainListUsersComponent
      },
      {
        path: 'add',
        component:MainAddUserComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
