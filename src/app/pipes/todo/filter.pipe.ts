import { Pipe, PipeTransform } from '@angular/core';
import { filters, validFilter } from 'src/app/filter/filter.actions';
import { EntityTodo } from 'src/app/models/todos/EntityTodo';

@Pipe({
  name: 'filterTodo',
})
export class FilterPipe implements PipeTransform {
  transform(value: EntityTodo[], filter: validFilter): EntityTodo[] {
    const filtroTodo = {
      'completed': (todos: EntityTodo[]) => todos.filter( ({ completed }) => completed ),
      'pending': (todos: EntityTodo[]) => todos.filter( ({ completed }) => !completed),
    }
    switch( filter ){
      case 'all': return value;
      case 'completed': return filtroTodo.completed( value );
      case 'pending': return filtroTodo.pending( value );
      default: return value;
    }
  }

}
