import * as SearchActions from './search.actions';

export interface State {
    isSearchMode: boolean;
}

const initState: State = {
    isSearchMode: false
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
        default:
            return state;
    }
}
