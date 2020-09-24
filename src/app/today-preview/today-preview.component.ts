import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';

import { AppState } from '../store/app.reducer';
import * as TodayPreviewActions from './store/today-preview.actions';

@Component({
  selector: 'app-today-preview',
  templateUrl: './today-preview.component.html',
  styleUrls: ['./today-preview.component.scss']
})
export class TodayPreviewComponent implements OnInit, OnDestroy {
  private latt: number;
  private long: number;
  public error: string;
  private storeSubscription: Subscription;

  constructor( private store: Store<AppState> ) { }

  ngOnInit(): void {
    this.storeSubscription = this.store.select('todayPreview').subscribe( res => {
      console.log(res);
    });
  }

  ngOnDestroy(): void {
    this.storeSubscription.unsubscribe();
  }

  onGeolocalisation() {
      this.store.dispatch( new TodayPreviewActions.StartLocation() );
      navigator.geolocation.getCurrentPosition( (position) => {
        this.showPosition(position);
      }, (error) => {
        this.showError(error);
      });
    }

  showPosition(position) {
    this.latt = position.coords.latitude;
    this.long = position.coords.longitude;
    this.store.dispatch( new TodayPreviewActions.FindLocationDetails({latt: this.latt, long: this.long}));
  }

  showError(error) {
    if (error) {
      this.error = 'It is not possible to geolocalize you. Please use the Search button to find tour position.';
    }
  }

}
