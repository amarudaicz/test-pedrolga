import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from 'mini-rx-store';
import { User } from 'src/app/modules/users/interfaces/user.interface';
import { selectUsersState } from 'src/app/store/selectors/selectors';

@Component({
  selector: 'app-main-edit-user',
  templateUrl: './main-edit-user.component.html',
  styleUrls: ['./main-edit-user.component.css']
})
export class MainEditUserComponent implements OnInit {

  user: User | undefined;
  userId: string | null;

  constructor(
    private route: ActivatedRoute,
    private store: Store,
    private router: Router
  ) {
    this.userId = this.route.snapshot.paramMap.get('id');
   }

  ngOnInit(): void {

    if (!this.userId) {
      this.router.navigate(['/']);
      return;
    }
  
  }

}
