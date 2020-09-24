import { LocationModel } from './../../models/location.model';
import * as TodayPreviewActions from './today-preview.actions';

export interface State {
    isLocalising: boolean;
    location: LocationModel;
}

const initialState: State = {
    isLocalising : false,
    location: null
};

export function TodayPreviewReducer( state = initialState, action: TodayPreviewActions.TodayPreviewActions) {
    switch (action.type) {
        case TodayPreviewActions.START_LOCATION:
            return {
                ...state,
                isLocalising: true
            };
        case TodayPreviewActions.UPDATE_LOCATION:
            return {
                ... state,
                isLocalising: false,
                location: action.payload
            };

        default:
            return state;
    }
}
