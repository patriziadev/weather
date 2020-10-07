import { Action } from '@ngrx/store';

export const SEARCH_MODE_ON = '[TodayPreview] SearchModeOn';
export const SEARCH_MODE_OFF = '[TodayPreview] SearchModeOff';

export class SearchModeOn implements Action {
    readonly type = SEARCH_MODE_ON;
}

export class SearchModeOff implements Action {
    readonly type = SEARCH_MODE_OFF;
}

export type SearchActions =
    | SearchModeOn
    | SearchModeOff;
