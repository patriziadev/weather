import { ActionReducerMap } from '@ngrx/store/src';
import * as fromTodayPreview from '../today-preview/store/today-preview.reducer';

export interface AppState {
    todayPreview: fromTodayPreview.State;
}

export const appReducer: ActionReducerMap<AppState> = {
    todayPreview: fromTodayPreview.TodayPreviewReducer
};
