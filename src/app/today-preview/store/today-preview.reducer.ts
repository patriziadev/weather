import { LocationModel } from './../../models/location.model';
import { WeatherModel } from './../../models/weather.model';
import * as TodayPreviewActions from './today-preview.actions';

export interface State {
    isLocalising: boolean;
    error: string;
    location: LocationModel;
    weather: WeatherModel[];
}

const initialState: State = {
    isLocalising: false,
    error: null,
    location: null,
    weather: null
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
                error: null,
                location: action.payload
            };
        case TodayPreviewActions.ERROR_LOCATION:
            return {
                ...state,
                isLocalising: false,
                error: action.payload
            };
        case TodayPreviewActions.UPDATE_WEATHER:
            return {
                ...state,
                isLocalising: false,
                weather: action.payload
            };
        default:
            return state;
    }
}
