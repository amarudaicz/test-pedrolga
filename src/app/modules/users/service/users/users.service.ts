import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { User } from '../../interfaces/user.interface';
import { users } from 'src/app/DB/DB';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor() { }

  public getUsers(){
    return of(
      users
    )
  }

  public addUser(user:User){
    return of(
      user
    )
  }

  public updateUser(user:User){
    return of(
      user
    )
  }

  public deleteUser(id:number){
    return of(
      id
    )
  }

}
