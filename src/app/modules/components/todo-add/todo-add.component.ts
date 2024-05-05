import { Component, inject, signal } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/interface/app.reducer';
import { createTodo } from 'src/app/models/todos/todo.actions';

@Component({
  selector: 'app-todo-add',
  templateUrl: './todo-add.component.html',
  styleUrls: ['./todo-add.component.css']
})
export class TodoAddComponent {

  // public txtInput = signal<FormControl>(new FormControl('', [Validators.required]));
  public txtInput!: FormControl;
  // #store = inject(Store) as Store<AppState>;
  constructor(private store: Store<AppState> ){
    this.txtInput = new FormControl('', Validators.required);
  }

  addTodo(){
    if( this.txtInput.invalid ) return;
    this.store.dispatch( createTodo( this.txtInput.value ) );
    this.txtInput.reset();
  }
}
