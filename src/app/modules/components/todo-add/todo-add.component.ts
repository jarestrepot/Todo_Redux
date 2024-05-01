import { Component, inject, signal } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/interface/app.reducer';
import * as Actions from 'src/app/models/todos/todo.actions';

@Component({
  selector: 'app-todo-add',
  templateUrl: './todo-add.component.html',
  styleUrls: ['./todo-add.component.css']
})
export class TodoAddComponent {

  public txtInput = signal<FormControl>(new FormControl('', [Validators.required]));
  #store = inject(Store) as Store<AppState>;

  addTodo(){
    if( this.txtInput().invalid ) return;
    //TODO: Verificar el todo.
    this.#store.dispatch( Actions.createTodo( this.txtInput().value ) );
    this.txtInput().reset();
  }
}
