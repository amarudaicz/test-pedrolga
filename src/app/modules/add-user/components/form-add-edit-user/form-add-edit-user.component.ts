import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Store } from 'mini-rx-store';
import { take } from 'rxjs';
import { User } from 'src/app/modules/users/interfaces/user.interface';
import { AddUser, UpdateUser } from 'src/app/store/actions/user.actions';
import { selectUsersState } from 'src/app/store/selectors/selectors';

@Component({
  selector: 'app-form-add-edit-user',
  templateUrl: './form-add-edit-user.component.html',
  styleUrls: ['./form-add-edit-user.component.css']
})
export class FormAddEditUserComponent implements OnInit {

  user: User | undefined = undefined; // Este es el input para editar un usuario, si no es null se editará
  userForm: FormGroup;
  isEditMode: boolean = false;
  userId: string | null

  constructor(private fb: FormBuilder, private store: Store,
    private route: ActivatedRoute,

  ) {
    this.userForm = this.fb.group({
      id: [null],
      name: ['', [Validators.required, Validators.minLength(3)]],
      lastName: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      role: ['']
    });

    this.userId = this.route.snapshot.paramMap.get('id');

  }

  ngOnInit(): void {
    if (!this.userId) return

    this.isEditMode = true;
    this.store.select(selectUsersState).subscribe(usersState => {
      const user = usersState.allUsers.find(u => u.id === Number(this.userId));
      console.log(user);
      if (user) {
        this.user = user;
        this.userForm.patchValue(user);
      }
    });

  }



  onSubmit() {
    if (!this.userForm.valid) return alert('Completar todos los campos')

    const user = this.userForm.value
    console.log(user);

    if (this.isEditMode) {
      this.store.dispatch(new UpdateUser(user))
      return
    }

    this.store.dispatch(new AddUser(user))
    this.userForm.reset()
  }
}
