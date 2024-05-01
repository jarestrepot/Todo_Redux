import { EntityTodo } from "../models/todos/EntityTodo";

export interface AppState {
  todos: EntityTodo[],
  usuario?: Record<string, string>,

}

