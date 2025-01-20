import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainUsersComponent } from './modules/users/components/main-users/main-users.component';
import { MainListUsersComponent } from './modules/list-users/components/main-list-users/main-list-users.component';
import { MainAddUserComponent } from './modules/add-user/components/main-add-user/main-add-user.component';
import { MainEditUserComponent } from './modules/edit-user/components/main-edit-user/main-edit-user.component';

const routes: Routes = [

  {
    path: '',
    component: MainUsersComponent,
    children: [
      {
        path: '',
        component: MainListUsersComponent
      },
      {
        path: 'add',
        component: MainAddUserComponent
      },
      {
        path: 'edit/:id',
        component: MainEditUserComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
