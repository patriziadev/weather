import { Component, OnInit, OnDestroy, AfterContentInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Store } from '@ngrx/store';
import { trigger, stagger, style, transition, animate } from '@angular/animations';

import { AppState } from './store/app.reducer';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    trigger('changeLeftSide', [
      transition(':enter', [
        style({transform: 'translateX(-100%)'}),
        animate('400ms 200ms ease-in', style({transform: 'translateX(0%)'}))
      ]),
      transition(':leave', [
        animate('400ms 200ms ease-out', style({transform: 'translateX(-100%)'}))])
      ])
  ]
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
