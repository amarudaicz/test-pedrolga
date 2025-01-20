import { Injectable } from '@angular/core';
import { delay, of, throwError, switchMap } from 'rxjs';
import { User } from '../../interfaces/user.interface';
import { _USERS } from 'src/app/DB/DB';
import { Store } from 'mini-rx-store';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  $offline = this.store.select((state) => state['users'].offline);

  constructor(private store: Store) {}

  private handleOfflineError() {
    return this.$offline.pipe(
      switchMap((offline) => {
        if (offline) {
          return throwError(() => new Error('Offline mode is enabled'));
        }
        return of(null); 
      })
    );
  }

  public getUsers(currentPage: number, pageSize = 10) {
    return this.handleOfflineError().pipe(
      switchMap(() => {
        const startIndex = (currentPage - 1) * pageSize;
        const endIndex = startIndex + pageSize;
        const paginatedUsers = _USERS.slice(startIndex, endIndex);
        const totalPages = Math.ceil(_USERS.length / pageSize); // Redondea hacia arriba para obtener el total de páginas

        return of(_USERS).pipe(delay(2000)); // Simula un retraso de 2 segundos
      })
    );
  }

  public addUser(user: User) {
    return this.handleOfflineError().pipe(
      switchMap(() => {
        return of(user).pipe(delay(2000)); // Simula un retraso de 2 segundos
      })
    );
  }

  public updateUser(user: User) {
    return this.handleOfflineError().pipe(
      switchMap(() => {
        return of(user).pipe(delay(2000)); // Simula un retraso de 2 segundos
      })
    );
  }

  public deleteUser(id: number) {
    return this.handleOfflineError().pipe(
      switchMap(() => {
        return of(id).pipe(delay(2000)); // Simula un retraso de 2 segundos
      })
    );
  }
}
