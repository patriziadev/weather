import { WeatherModel } from './../../models/weather.model';
import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { catchError, map, switchMap } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

import { environment } from './../../../environments/environment';
import * as TodayPreviewActions from './today-preview.actions';
import { of } from 'rxjs';

export interface LocationResponseData {
    distance: number;
    title: string;
    location_type: string;
    woeid: number;
    latt_long: string;
}

export interface WeatherResponseData {
    consolidated_weather: WeatherModel[];
}

@Injectable()
export class TodayPreviewEffects {

    @Effect()
    findLocationDetails = this.actions$.pipe(
        ofType(TodayPreviewActions.FIND_LOCATION_DETAILS),
        switchMap( (response: TodayPreviewActions.FindLocationDetails) => {
            return this.http.get<LocationResponseData>(
                environment.locationSearchApi + response.payload.latt + ',' + response.payload.long)
                .pipe(
                    map( responseData => {
                        return new TodayPreviewActions.UpdateLocation ({
                            latitude: response.payload.latt,
                            longitude: response.payload.long,
                            title: responseData[0].title,
                            locationType: responseData[0].location_type,
                            woeid: responseData[0].woeid
                        });
                    }),
                    catchError( error => {
                        return of(new TodayPreviewActions.ErrorLocation(error.statusText));
                    })
                );
        })
    );

    @Effect()
    fetchWeatherForecast = this.actions$.pipe(
        ofType(TodayPreviewActions.UPDATE_LOCATION),
        switchMap( (response: TodayPreviewActions.UpdateLocation) => {
            const dateTime = new Date();
            return this.http.get<WeatherResponseData>(
                environment.locationDayApi + response.payload.woeid
            ).pipe(
                map( responseData => {
                    console.log(responseData);
                    return new TodayPreviewActions.UpdateWeather(responseData.consolidated_weather);
                })
            );
        })
    );

    constructor(
        private actions$: Actions,
        private http: HttpClient
        ){}
}
