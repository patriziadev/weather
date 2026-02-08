import { ActionReducerMap } from '@ngrx/store';

import * as fromTodayPreview from '../today-preview/store/today-preview.reducer';
import * as fromSearch from '../search/store/search.reducer';

export interface AppState {
  todayPreview: fromTodayPreview.State;
  search: fromSearch.State;
}

export const appReducer: ActionReducerMap<AppState> = {
  todayPreview: fromTodayPreview.TodayPreviewReducer,
  search: fromSearch.SearchReducer,
};
