import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainListUsersComponent } from './components/main-list-users/main-list-users.component';
import { ListUsersComponent } from './components/list-users/list-users.component';
import { LoaderModule } from '../loader/loader.module';
import { SearchUserComponent } from './components/search-user/search-user.component';
import { SearchRoleUsersComponent } from './components/search-role-users/search-role-users.component';
import { ClearFiltersComponent } from './components/clear-filters/clear-filters.component';
import { FormsModule } from '@angular/forms';
import { PaginatorComponent } from './components/paginator/paginator.component';



@NgModule({
  declarations: [MainListUsersComponent, ListUsersComponent, SearchUserComponent, SearchRoleUsersComponent, ClearFiltersComponent, PaginatorComponent],
  imports: [
    FormsModule,
    CommonModule,
    LoaderModule,
  ],
  exports:[MainListUsersComponent, ListUsersComponent, SearchUserComponent]
})
export class ListUsersModule { }
