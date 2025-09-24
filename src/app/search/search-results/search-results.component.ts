import { Component, OnInit, OnDestroy } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';

import { AppState } from 'src/app/store/app.reducer';
import * as SearchActions from './../store/search.actions';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.scss'],
  standalone: false,
})
export class SearchResultsComponent implements OnInit, OnDestroy {
  public researchedLocations: string[];
  private searchSubscription: Subscription;

  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    this.searchSubscription = this.store
      .select('search')
      .subscribe((responseData) => {
        this.researchedLocations = responseData.savedResearches;
      });
  }

  ngOnDestroy(): void {
    this.searchSubscription.unsubscribe();
  }

  onSearch(location) {
    this.store.dispatch(new SearchActions.SearchLocationDetails(location));
  }
}
