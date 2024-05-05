import { Component, ElementRef, Input, OnInit, ViewChild, inject, signal } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { EntityTodo } from 'src/app/models/todos/EntityTodo';
import * as Actions from 'src/app/models/todos/todo.actions';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {

  public todoItemSignal = signal<EntityTodo | null >(null)
  @Input({ required: true }) set todoItem( todo: EntityTodo){
    this.todoItemSignal.set( todo )
  }
  #store = inject(Store);
  @ViewChild('inputText') textInput!: ElementRef<HTMLInputElement>;
  public editSignal = signal<boolean>(false)
  chkComplete!: FormControl;
  txtInput!: FormControl;
  ngOnInit(): void {

    if( !this.todoItemSignal() ) return;
    this.chkComplete = new FormControl( this.todoItemSignal()?.completed )
    this.txtInput = new FormControl( this.todoItemSignal()?.text, [Validators.required, Validators.minLength(6)] )
    this.chkComplete.valueChanges.subscribe( (value:boolean) => {
      let id = {
        id: this.todoItemSignal()?.id ?? 1
      }
      this.#store.dispatch( Actions.toggleComplete( id ) )
    });

  }

  editing(){
    this.editSignal.set( true );
    this.txtInput.setValue( this.todoItemSignal()?.text );
    setTimeout(() => {this.textInput.nativeElement.select()}, 1)
  }

  endEdit(){
    this.editSignal.set( false );
    if ( this.txtInput.invalid ) return;
    if ( this.txtInput.value === this.todoItemSignal()?.text ) return;

    this.#store.dispatch( Actions.editTodo({
      id: this.todoItemSignal()?.id ?? 1,
      text: this.txtInput.value
    }))
  }


  deleteTodo(){
    console.log( 'Delete todo ')
    this.#store.dispatch( Actions.deleteTodo( { id: this.todoItemSignal()?.id ?? 1 } ) )
  }
}
