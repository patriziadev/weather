import { Action } from '@ngrx/store';

import { LocationModel } from '../../models/location.model';

export const START_LOCATION = '[TodayPreview] StartLocation';
export const FIND_LOCATION_DETAILS = '[TodayPreview] FindLocationDetails';
export const UPDATE_LOCATION = '[Today Preview] UpdateLocation';

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

export type TodayPreviewActions =
    | StartLocation
    | FindLocationDetails
    | UpdateLocation;