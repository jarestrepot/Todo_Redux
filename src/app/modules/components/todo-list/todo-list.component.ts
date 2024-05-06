import { Component, OnInit, inject, signal } from '@angular/core';
import { Store } from '@ngrx/store';
import { validFilter } from 'src/app/filter/filter.actions';
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
  public filterTodo = signal <validFilter>('all')
  #store = inject<Store<AppState>>(Store);
  constructor( private store: Store<AppState>){
  }

  ngOnInit(): void {
    this.store.subscribe({
      next: ({ todos , filtres }) => {
        this.todosList = todos;
        this.filterTodo.set( filtres as validFilter );
      },
      error: (err)  => this.todosList = []
    });
  }
}
