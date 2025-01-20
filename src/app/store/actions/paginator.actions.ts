import { Action } from "mini-rx-store";
import { PaginatorActionsTypes } from "../interfaces/paginator.actions.interface";

  export class SetPage implements Action {
    readonly type = PaginatorActionsTypes.SET_PAGE;
    constructor(public payload: number) {}
  }
  
  export class SetTotalPages implements Action {
    readonly type = PaginatorActionsTypes.SET_TOTAL_PAGES;
    constructor(public payload: number) {}
  }

  export class SetPageSize implements Action {
    readonly type = PaginatorActionsTypes.SET_PAGE_SIZE;
    constructor(public payload: number) {}
  }