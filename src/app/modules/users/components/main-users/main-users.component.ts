import { Component } from '@angular/core';
import { Store } from 'mini-rx-store';
import { tap, timer } from 'rxjs';
import { LoadUsers, ToggleOffline } from 'src/app/store/actions/user.actions';

@Component({
  selector: 'app-main-users',
  templateUrl: './main-users.component.html',
  styleUrls: ['./main-users.component.css']
})
export class MainUsersComponent {

  loading$ = this.store.select(state=>state['users'].loading)
  errors$ = this.store.select(state=> state['users'].err)
  offline$ = this.store.select(state=> state['users'].offline)

  showError = false
  
  constructor(private store:Store){
    this.store.dispatch(new LoadUsers())

    this.errors$.subscribe(e=>{
      if (!e) return
      this.showError = true
      setTimeout(() => this.showError = false, 3000);
    })
  
  }


  toggleOffline(){
    this.store.dispatch(new ToggleOffline())
  }


}
