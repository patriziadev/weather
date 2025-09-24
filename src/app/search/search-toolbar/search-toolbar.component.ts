import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import { State } from './../store/search.reducer';
import * as SearchActions from '../store/search.actions';

@Component({
  selector: 'app-search-toolbar',
  templateUrl: './search-toolbar.component.html',
  styleUrls: ['./search-toolbar.component.scss'],
  standalone: false,
})
export class SearchToolbarComponent implements OnInit {
  constructor(private store: Store<State>) {}

  ngOnInit(): void {}

  onSearchClose() {
    this.store.dispatch(new SearchActions.SearchModeOff());
  }
}
