import { WeatherModel } from './../models/weather.model';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import { AppState } from '../store/app.reducer';
import { map, filter } from 'rxjs/operators';

@Component({
  selector: 'app-previous-preview',
  templateUrl: './previous-preview.component.html',
  styleUrls: ['./previous-preview.component.scss']
})
export class PreviousPreviewComponent implements OnInit {
  public nextDaysForecast: WeatherModel[];

  constructor( private store: Store<AppState> ) { }

  ngOnInit(): void {
    this.store.select('todayPreview').pipe(
      map( responseData => {
        if (responseData.weather) {
          return responseData.weather.filter( (weather, id) => {
            return id !== 0;
          });
        }
      })
    ).subscribe( responseData => {
      this.nextDaysForecast = responseData;
      console.log(this.nextDaysForecast);
    });
  }
}
