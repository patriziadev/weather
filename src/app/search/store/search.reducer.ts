import * as SearchActions from './search.actions';

export interface State {
    isSearchMode: boolean;
    error: string;
}

const initState: State = {
    isSearchMode: false,
    error: ''
};

export function SearchReducer(state = initState, action: SearchActions.SearchActions) {
    switch (action.type) {
        case SearchActions.SEARCH_MODE_OFF:
            return {
                ...state,
                isSearchMode: false
            };
        case SearchActions.SEARCH_MODE_ON:
            return {
                ...state,
                isSearchMode: true
            };
        case SearchActions.SEARCH_LOCATION_DETAILS:
            return {
                ...state,
                error: null
            }
        case SearchActions.SEARCH_ERROR:
            return {
                ...state,
                error : 'Location not found. Please insert another place.'
            };
        default:
            return state;
    }
}
