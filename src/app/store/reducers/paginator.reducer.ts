import { Action, Reducer } from "mini-rx-store";
import { PaginatorActionsTypes } from "../interfaces/paginator.actions.interface";

export interface PaginatorState {
    currentPage: number;
    pageSize: number;
    totalPages:number
}

export const initialState: PaginatorState = {
    currentPage: 1,
    pageSize: 10,
    totalPages:0
}

export const paginatorReducer: Reducer<PaginatorState> = (
    state: PaginatorState = initialState,
    action: Action
  ): PaginatorState => {
    
    switch (action.type) {
      case PaginatorActionsTypes.SET_PAGE:
        return {
          ...state,
          currentPage: action['payload'],
        };

        case PaginatorActionsTypes.SET_TOTAL_PAGES:
          return {
            ...state,
            totalPages: action['payload'],
          };

          case PaginatorActionsTypes.SET_PAGE_SIZE:
            return {
            ...state,
              pageSize:action['payload'],
            } 
  
      default:
        return state;
    }


  };
  