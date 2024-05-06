import { createAction, props } from '@ngrx/store';

export type validFilter = 'all' | 'completed' | 'pending';
export enum filters {
  all = 'all', completed = 'completed', pending = 'pending'
}

export const setFilterAction = createAction('[Filter] Set Filter',
  props<{ filtro: validFilter }>()
);



