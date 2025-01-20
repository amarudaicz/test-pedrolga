import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from 'mini-rx-store';
import { User } from 'src/app/modules/users/interfaces/user.interface';
import { SetPage, SetPageSize } from 'src/app/store/actions/paginator.actions';
import { DeleteUser } from 'src/app/store/actions/user.actions';
import { PaginatorState } from 'src/app/store/reducers/paginator.reducer';
import { UsersState } from 'src/app/store/reducers/user.reducer';
import { selectFilteredPaginatedUsers, selectPaginatedUsers } from 'src/app/store/selectors/selectors';

@Component({
  selector: 'app-list-users',
  templateUrl: './list-users.component.html',
  styleUrls: ['./list-users.component.css']
})
export class ListUsersComponent {


  filteredUsers$ = this.store.select(selectFilteredPaginatedUsers);
  paginatorState$ = this.store.select<PaginatorState>(state => state['paginator'])
  usersState$ = this.store.select<UsersState>(state => state['users'])
  
  constructor(private store:Store, private router: Router){
    this.usersState$.subscribe(res=>{
      console.log(res);
    })

  }

  editUser(user: User): void {
     this.router.navigate(['/edit', user.id]);
  }

  deleteUser(id: number): void {
    this.store.dispatch(new DeleteUser(id))
  }

  changePage(newPage: number) {
    this.store.dispatch(new SetPage(newPage));
  }

  setPageSize(e:any){
    const pageSize = Number(e!.target.value)
    this.store.dispatch(new SetPageSize(pageSize))
  }


}
