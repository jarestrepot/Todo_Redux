import { createReducer, on } from '@ngrx/store';
import { EntityTodo } from './EntityTodo';
import * as Actions from './todo.actions';

export const initialState:EntityTodo[] = [
  new EntityTodo('Aprender Java'),
  new EntityTodo('Aprender docker'),
  new EntityTodo('Aprender Rxjs')
]
export const todoReducer = createReducer(
  initialState,
  on(Actions.createTodo, (state, { type, ...value}) => {
    const values:string = Object.values(value).map(item => item).join('');
    if (!values ) return state;
    return [...state, new EntityTodo(values)] as EntityTodo[]
  }),

  on( Actions.toggleComplete, (state, { id }) => {
    return state.map( (todo:EntityTodo) => {
      if( todo.id === id ){
        return {
          ...todo,
          completed: !todo.completed
        }
      }else {
        return todo
      }
    }) as EntityTodo [];
  }),

  on( Actions.editTodo, (state, { id, text }) => {
    return state.map((todo: EntityTodo) => {
      if (todo.id === id && text) {
        return {
          ...todo,
          text: text
        }
      } else {
        return todo
      }
    }) as EntityTodo [];
  }),

  on( Actions.deleteTodo, (state, { id }) =>  state.filter( todo => todo.id !== id )),
  on( Actions.cleatTodoCompleted, ( state ) => state.filter( ({ completed }) => !completed))
);

