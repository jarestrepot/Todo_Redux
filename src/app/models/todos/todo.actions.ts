
import { createAction, props } from '@ngrx/store';

export const createTodo = createAction('[Todo] Create Todo',
  props<{ text: string }>()
);


export const toggleComplete = createAction('[Todo] Toogle Todo',
  props<{ id: number }>()
);


export const editTodo = createAction('[Todo] Toogle Todo',
  props<{ id: number, text: string }>()
);

export const deleteTodo = createAction('[Todo] Toogle Todo',
  props<{ id: number }>()
);
