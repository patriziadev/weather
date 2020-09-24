import { WeatherModel } from './../models/weather.model';
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
  public weatherForecast: WeatherModel[];
  public todayWeather: WeatherModel;
  public theTemp: number;
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
      this.weatherForecast = responseData.weather;
      if (this.weatherForecast) {
        console.log(this.weatherForecast[0]);
        this.todayWeather = this.weatherForecast[0];
        this.theTemp = Math.round(this.todayWeather.the_temp);
      }
      
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
