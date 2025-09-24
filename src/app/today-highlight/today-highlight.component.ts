import { WeatherResponseData } from './../today-preview/store/today-preview.effects';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Store } from '@ngrx/store';

import { AppState } from '../store/app.reducer';
import { WeatherModel } from './../models/weather.model';

@Component({
  selector: 'app-today-highlight',
  templateUrl: './today-highlight.component.html',
  styleUrls: ['./today-highlight.component.scss'],
  standalone: false,
})
export class TodayHighlightComponent implements OnInit, OnDestroy {
  public weatherForecast: WeatherModel;
  private weatherSubscription: Subscription;
  public wind: number;

  windCompass = {
    N: 0,
    NNE: 22.5,
    NE: 45,
    ENE: 67.5,
    E: 90,
    ESE: 112.5,
    SE: 135,
    SSE: 157.5,
    S: 180,
    SSW: 202.5,
    SW: 225,
    WSW: 247.5,
    W: 270,
    WNW: 292.5,
    NW: 315,
    NNW: 337.5,
  };

  private windMap = new Map(Object.entries(this.windCompass));

  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    this.store.select('todayPreview').subscribe((responseData) => {
      if (responseData.weather) {
        this.weatherForecast = responseData.weather[0];
        this.wind = this.windMap.get(
          this.weatherForecast.wind_direction_compass
        );
        console.log(this.weatherForecast);
      }
    });
  }

  ngOnDestroy(): void {
    this.weatherSubscription.unsubscribe();
  }
}
