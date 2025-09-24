import { WeatherModel } from './../models/weather.model';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';

import { AppState } from '../store/app.reducer';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-previous-preview',
  templateUrl: './previous-preview.component.html',
  styleUrls: ['./previous-preview.component.scss'],
  standalone: false,
})
export class PreviousPreviewComponent implements OnInit, OnDestroy {
  public nextDaysForecast: WeatherModel[];
  public temperatureScaleCelsius: boolean;
  private weatherSubscription: Subscription;

  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    this.weatherSubscription = this.store
      .select('todayPreview')
      .pipe(
        map((responseData) => {
          if (responseData.weather) {
            this.temperatureScaleCelsius = responseData.isCelsius;
            return responseData.weather.filter((weather, id) => {
              return id !== 0;
            });
          }
        })
      )
      .subscribe((responseData) => {
        this.nextDaysForecast = responseData;
      });
  }

  ngOnDestroy(): void {
    this.weatherSubscription.unsubscribe();
  }
}
