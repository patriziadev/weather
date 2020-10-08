import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { map, switchMap, catchError } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

import { environment } from './../../../environments/environment';
import * as SearchActions from './search.actions';
import * as TodayPreviewActions from './../../today-preview/store/today-preview.actions';
import { of } from 'rxjs';
import { title } from 'process';

export interface LocationResponseDataFromFreeSearch {
    title: string;
    location_type: string;
    woeid: number;
    latt_long: string;
}

@Injectable()
export class SearchEffects {

    @Effect()
    findLocationDetailsOnSearch = this.actions$.pipe(
        ofType(SearchActions.SEARCH_LOCATION_DETAILS),
        switchMap( (response: SearchActions.SearchLocationDetails) => {
            return this.http.get<LocationResponseDataFromFreeSearch>(
                environment.locationFreeSearchApi + response.payload)
                .pipe(
                    switchMap( responseData => {
                        let latt: string;
                        let long: string;
                        const lattLong = responseData[0].latt_long.split(', ');
                        [latt, long] = lattLong;
                        return [new TodayPreviewActions.UpdateLocation({
                            latitude: Number(latt),
                            longitude: Number(long),
                            title: responseData[0].title,
                            locationType: responseData[0].location_type,
                            woeid: responseData[0].woeid
                        }), new SearchActions.SaveResearch(responseData[0].title),
                        new SearchActions.SearchModeOff()];
                    }),
                    catchError( error => {
                        return of(new SearchActions.SearchError());
                    })
            );
        })
    );

    constructor(
        private actions$: Actions,
        private http: HttpClient
    ) {}
}
