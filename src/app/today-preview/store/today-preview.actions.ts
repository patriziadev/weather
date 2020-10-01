import { Action } from '@ngrx/store';

import { LocationModel } from '../../models/location.model';
import { WeatherModel } from './../../models/weather.model';

export const START_LOCATION = '[TodayPreview] StartLocation';
export const FIND_LOCATION_DETAILS = '[TodayPreview] FindLocationDetails';
export const UPDATE_LOCATION = '[TodayPreview] UpdateLocation';
export const ERROR_LOCATION = '[TodayPreview] ErrorLocation';
export const UPDATE_WEATHER = '[TodayPreview] UpdateWeather';
export const IS_FARENHEIT = '[TodayPreview] IsFarenheit';
export const IS_CELSIUS = '[TodayPreview] IsCelsius';

export class StartLocation implements Action {
    readonly type = START_LOCATION;
}

export class FindLocationDetails implements Action {
    readonly type = FIND_LOCATION_DETAILS;
    constructor( public payload: {latt: number, long: number} ) {}
}

export class UpdateLocation implements Action {
    readonly type = UPDATE_LOCATION;
    constructor( public payload: LocationModel ) {}
}

export class ErrorLocation implements Action {
    readonly type = ERROR_LOCATION;
    constructor( public payload: string ) {}
}

export class UpdateWeather implements Action {
    readonly type = UPDATE_WEATHER;
    constructor( public payload: WeatherModel[] ) {}
}

export class IsFarenheit implements Action {
    readonly type = IS_FARENHEIT;
}

export class IsCelsius implements Action {
    readonly type = IS_CELSIUS;
}

export type TodayPreviewActions =
    | StartLocation
    | FindLocationDetails
    | UpdateLocation
    | ErrorLocation
    | UpdateWeather
    | IsFarenheit
    | IsCelsius;
