import { Component, OnInit } from '@angular/core';
import { Store } from 'mini-rx-store';
import { DeleteUser, LoadUsers, SetError, UpdateUser } from './store/actions/user.actions';
import { UsersEffects } from './store/effects/users.effects';
import { PaginatorEffects } from './store/effects/paginator.effects';
import { FilterEffects } from './store/effects/filters.effects';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'test-pedrolga';

  constructor(private store:Store , private userEffects:UsersEffects, private paginatorEffects:PaginatorEffects, private filtersEffects:FilterEffects){

  }

  ngOnInit(): void {




  }

}
