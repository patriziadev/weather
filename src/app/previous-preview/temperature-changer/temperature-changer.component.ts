import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import { AppState } from 'src/app/store/app.reducer';
import * as TodayPreviewActions from './../../today-preview/store/today-preview.actions';

@Component({
  selector: 'app-temperature-changer',
  templateUrl: './temperature-changer.component.html',
  styleUrls: ['./temperature-changer.component.scss']
})
export class TemperatureChangerComponent implements OnInit {

  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
  }

  onCelsius() {
    this.store.dispatch(new TodayPreviewActions.IsCelsius());
  }

  onFarenheit() {
    this.store.dispatch(new TodayPreviewActions.IsFarenheit());
  }

}
