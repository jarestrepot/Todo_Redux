import { Component, ElementRef, Input, OnInit, ViewChild, effect, inject, signal } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/interface/app.reducer';
import { EntityTodo } from 'src/app/models/todos/EntityTodo';
import * as Actions from 'src/app/models/todos/todo.actions';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {

  // public todoItemSignal = signal<EntityTodo | null >(null)
  // @Input({ required: true }) set todoItem( todo: EntityTodo){
  //   this.todoItemSignal.set( todo )
  // }
  @Input({ required: true }) todoItem!: EntityTodo;
  #store = inject(Store);

  constructor( private store: Store<AppState>){
    effect( () => {
      this.chkComplete().valueChanges.subscribe( value => {
        if( !value ) return;
        let id = {
            id: this.todoItem.id
        };
        this.store.dispatch(Actions.toggleComplete(id) );
      });
    })
  }

  @ViewChild('inputText') textInput!: ElementRef<HTMLInputElement>;
  public editSignal = signal<boolean>(false);
  chkComplete = signal<FormControl<boolean | null>>(new FormControl(false, Validators.required));
  txtInput!: FormControl;

  ngOnInit(): void {
    if ( !this.todoItem ) return;
    this.txtInput = new FormControl( this.todoItem.text, [Validators.required, Validators.minLength(6)] )
  }

  editing(){
    this.editSignal.set( true );
    this.txtInput.setValue( this.todoItem.text );
    setTimeout(() => {this.textInput.nativeElement.select()}, 1)
  }

  endEdit(){
    this.editSignal.set( false );
    if ( this.txtInput.invalid ) return;
    if ( this.txtInput.value === this.todoItem.text ) return;
    this.store.dispatch( Actions.editTodo({
      id: this.todoItem.id,
      text: this.txtInput.value
    }))
  }


  deleteTodo(){
    this.store.dispatch( Actions.deleteTodo( { id: this.todoItem.id } ) )
  }
}
