
import { createAction, props } from '@ngrx/store';

export const createTodo = createAction('[Todo] Create Todo',
  props<{ text: string }>()
);


