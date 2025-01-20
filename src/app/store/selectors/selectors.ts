import { createFeatureStateSelector, createSelector } from 'mini-rx-store';
import { UsersState } from '../reducers/user.reducer';
import { PaginatorState } from '../reducers/paginator.reducer';

export const selectUsersState = createFeatureStateSelector<UsersState>('users');
export const selectPaginatorState = createFeatureStateSelector<PaginatorState>('paginator');

export const selectPaginatedUsers = createSelector(
    selectUsersState,
    selectPaginatorState,
    (usersState, paginatorState) => {
      const start = (paginatorState.currentPage - 1) * paginatorState.pageSize;
      const end = start + paginatorState.pageSize;

      return usersState.allUsers.slice(start, end);
    }
  );

export const selectAllUsers = createSelector(
  selectUsersState,
  (state) => state.allUsers
);

export const selectFilters = createSelector(
  selectUsersState,
  (state) => state.filter
);

export const selectFilteredPaginatedUsers = createSelector(
  selectAllUsers, 
  selectFilters,  
  selectPaginatorState, 
  (allUsers, filters, paginatorState) => {
    // FILTRAR PRIMEROOOOOOOOO
    const filteredUsers = allUsers
      .filter((user) =>
        filters.role ? user.role === filters.role : true
      )
      .filter((user) =>
        filters.query
          ? `${user.name} ${user.lastName}`
              .toLowerCase()
              .includes(filters.query.toLowerCase())
          : true
      );

    const start = (paginatorState.currentPage - 1) * paginatorState.pageSize;
    const end = start + paginatorState.pageSize;
      
    return{
      users: filteredUsers.slice(start, end),
      count:filteredUsers.length
    };
  }
);

export const selectUsersAndPagination = createSelector(
  selectFilteredPaginatedUsers,
  selectPaginatorState,
  (filtredUsers, paginatorState) => ({
    usersCount: filtredUsers.count, 
    currentPage: paginatorState.currentPage, 
  })
);