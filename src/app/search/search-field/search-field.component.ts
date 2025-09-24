import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import * as SearchActions from '../store/search.actions';
import { AppState } from 'src/app/store/app.reducer';

@Component({
  selector: 'app-search-field',
  templateUrl: './search-field.component.html',
  styleUrls: ['./search-field.component.scss'],
  standalone: false,
})
export class SearchFieldComponent implements OnInit {
  public error: string;

  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    this.store.select('search').subscribe((responseData) => {
      this.error = responseData.error;
    });
  }

  onSearch(data) {
    this.store.dispatch(
      new SearchActions.SearchLocationDetails(data.value.searchInput)
    );
  }
}
