import { createReducer, on, Action } from '@ngrx/store';
import { EntityTodo } from './EntityTodo';
import { createTodo } from './todo.actions';

export const initialState:EntityTodo[] = [
  new EntityTodo('Aprender Java'),
  new EntityTodo('Aprender docker'),
  new EntityTodo('Aprender Rxjs')
]
export const todoReducer = createReducer(
  initialState,
  on(createTodo, (state, { text }) => [...state, new EntityTodo(text) ])
);

export function createdTodoReducer( state:EntityTodo[] = initialState , action: Action ){
  return todoReducer( state, action );
}
