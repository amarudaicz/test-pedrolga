import { Component } from '@angular/core';
import { Store } from 'mini-rx-store';
import { RoleUser } from 'src/app/modules/users/interfaces/user.interface';
import { SetFilterRole } from 'src/app/store/actions/user.actions';

@Component({
  selector: 'app-search-role-users',
  templateUrl: './search-role-users.component.html',
  styleUrls: ['./search-role-users.component.css']
})
export class SearchRoleUsersComponent {

  constructor(private store:Store){}

  selectedRole$ = this.store.select(state=> state['users'].filter.role)

  setRole(event:Event){
    const role:RoleUser = (event.target as HTMLInputElement).value as RoleUser
    this.store.dispatch(new SetFilterRole(role))
  }

}
