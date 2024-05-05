import { Component, OnInit, inject, signal } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/interface/app.reducer';
import { EntityTodo } from 'src/app/models/todos/EntityTodo';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  // public todosList = signal<EntityTodo[]>([]);
  public todosList: EntityTodo[] = [];
  #store = inject<Store<AppState>>(Store);
  constructor( private store: Store<AppState>){}

  ngOnInit(): void {
    this.store.select('todos').subscribe({
      next: (todos: EntityTodo[]) => {
        this.todosList = todos
      },
      error: (err)  => this.todosList = []
    });
  }
}
