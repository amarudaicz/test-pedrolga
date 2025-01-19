import { Component, OnInit } from '@angular/core';
import { Store } from 'mini-rx-store';
import { DeleteUser, LoadUsers, SetError, UpdateUser } from './store/actions/user.actions';
import { UsersEffects } from './store/effects/users.effects';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'test-pedrolga';

  constructor(private store:Store , private effects:UsersEffects){

  }

  ngOnInit(): void {
    this.store.dispatch(new LoadUsers())
    this.store.dispatch(new UpdateUser({id:1, email:'asd', lastName:'', name:'amaru', role:'client'}))
    this.store.dispatch(new SetError({message:'ERROR_CRITICO'}))



  }

}
