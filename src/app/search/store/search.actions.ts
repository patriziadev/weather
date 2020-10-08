import { Action } from '@ngrx/store';

export const SEARCH_MODE_ON = '[Search] SearchModeOn';
export const SEARCH_MODE_OFF = '[Search] SearchModeOff';
export const SEARCH_LOCATION_DETAILS = '[Search] SearchLocationDetails';
export const SEARCH_ERROR = '[Search] SearchError';

export class SearchModeOn implements Action {
    readonly type = SEARCH_MODE_ON;
}

export class SearchModeOff implements Action {
    readonly type = SEARCH_MODE_OFF;
}

export class SearchLocationDetails implements Action {
    readonly type = SEARCH_LOCATION_DETAILS;
    constructor(public payload: string) {}
}

export class SearchError implements Action {
    readonly type = SEARCH_ERROR;
}

export type SearchActions =
    | SearchModeOn
    | SearchModeOff
    | SearchLocationDetails
    | SearchError;
