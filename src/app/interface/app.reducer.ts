import { ActionReducerMap } from "@ngrx/store";
import { EntityTodo } from "../models/todos/EntityTodo";
import { filters, validFilter } from "../filter/filter.actions";
import { todoReducer } from "../models/todos/todo.reducer";
import { filterReducer } from "../filter/filter.reducer";

export interface AppState {
  todos: EntityTodo[],
  usuario?: Record<string, string>,
  filtres: validFilter | string,
}
export const appReducer: ActionReducerMap<AppState> = {
  todos: todoReducer,
  filtres: filterReducer
}

