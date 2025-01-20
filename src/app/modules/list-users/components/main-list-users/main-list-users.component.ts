import { Component, OnInit } from '@angular/core';
import { Store } from 'mini-rx-store';
import { Observable } from 'rxjs';
import { User } from 'src/app/modules/users/interfaces/user.interface';
import { LoadUsers } from 'src/app/store/actions/user.actions';
import { selectPaginatedUsers } from 'src/app/store/selectors/selectors';

@Component({
  selector: 'app-main-list-users',
  templateUrl: './main-list-users.component.html',
  styleUrls: ['./main-list-users.component.css']
})
export class MainListUsersComponent implements OnInit{



  constructor(private store:Store){
  }

  

  ngOnInit(): void {
    
  }
  

}
