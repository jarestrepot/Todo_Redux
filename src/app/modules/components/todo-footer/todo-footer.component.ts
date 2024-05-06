import { Component, OnInit, inject, signal } from '@angular/core';
import { Store } from '@ngrx/store';
import { filter } from 'rxjs';
import * as Actions from 'src/app/filter/filter.actions';
import { AppState } from 'src/app/interface/app.reducer';

@Component({
  selector: 'app-todo-footer',
  templateUrl: './todo-footer.component.html',
  styleUrls: ['./todo-footer.component.css']
})
export class TodoFooterComponent implements OnInit {

  currentFilter = signal<Actions.validFilter>('all');
  validFilters = signal<Actions.validFilter[]>(['all', 'completed', 'pending']);
  #store = inject(Store) as Store<AppState>;
  itemLeft = signal<number>(0);

  ngOnInit(): void {
    this.#store.select('filtres').subscribe( {
      next: (filter) => this.currentFilter.set(filter as Actions.validFilter),
    })
    this.#store.subscribe( ({ filtres, todos }) => {
      this.currentFilter.set( filtres as Actions.validFilter );
      this.itemLeft.set(todos.filter(({ completed }) => !completed ).length );
    })
  }

  changedFilter( filtro: Actions.validFilter): void {
    if (this.currentFilter() === filtro ) return;
    this.#store.dispatch( Actions.setFilterAction({ filtro }) );
  }

}
