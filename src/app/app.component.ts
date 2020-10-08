import { Component, OnInit, OnDestroy, AfterContentInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Store } from '@ngrx/store';

import { AppState } from './store/app.reducer';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy, AfterContentInit {
  title = 'What\'s the weather';
  public isLoading: boolean;
  public isSearchMode: boolean;
  private storeSubscription: Subscription;

  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    this.storeSubscription = this.store.select('search').subscribe( responseData => {
      this.isSearchMode = responseData.isSearchMode;
    });
  }

  ngAfterContentInit() {
    this.store.select('todayPreview').subscribe( responseData => {
      this.isLoading = responseData.isLocalising;
    });
  }

  ngOnDestroy(): void {
    this.storeSubscription.unsubscribe();
  }
}
