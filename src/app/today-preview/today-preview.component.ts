import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';

import { LocationModel } from './../models/location.model';
import { WeatherModel } from './../models/weather.model';
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
  public dateTime: Date;
  public weatherForecast: WeatherModel[];
  public todayWeather: WeatherModel;
  public temperatureScaleCelsius: boolean;
  public isLoading: boolean;

  private storeSubscription: Subscription;

  constructor( private store: Store<AppState> ) { }

  ngOnInit(): void {
    this.dateTime = new Date();

    this.onGeolocalisation();

    this.storeSubscription = this.store.select('todayPreview').subscribe( responseData => {
      this.location = responseData.location;
      this.error = responseData.error;
      this.weatherForecast = responseData.weather;
      this.isLoading = responseData.isLocalising;
      if (this.weatherForecast) {
        this.todayWeather = this.weatherForecast[0];
      }
      this.temperatureScaleCelsius = responseData.isCelsius;
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
