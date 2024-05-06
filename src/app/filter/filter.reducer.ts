
import { createReducer, on } from '@ngrx/store';
import * as Actions from './filter.actions';

export const initialState: string = Actions.filters.all;
export const filterReducer = createReducer(
  initialState,
  on( Actions.setFilterAction, (state, { filtro }) => filtro ),
)


