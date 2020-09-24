import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';

import { LocationModel } from './../models/location.model';
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
  public location: LocationModel;
  public error: string;
  private monthsArray = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  private daysArray = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  public day: string;
  public date: number;
  public month: string;
  private storeSubscription: Subscription;

  constructor( private store: Store<AppState> ) { }

  ngOnInit(): void {
    const dateTime = new Date();
    this.day = this.daysArray[dateTime.getDay()];
    this.date = dateTime.getDate();
    this.month = this.monthsArray[dateTime.getMonth()];

    this.storeSubscription = this.store.select('todayPreview').subscribe( responseData => {
      this.location = responseData.location;
      this.error = responseData.error;
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
