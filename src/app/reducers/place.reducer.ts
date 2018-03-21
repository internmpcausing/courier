
import * as PlaceActions from './../actions/place.action';
import { IPlace } from './../models/place.model';

export type Action = PlaceActions.All;



export interface PlaceSuggestions{
    fromSuggestions: IPlace[],
    toSuggestions: IPlace[],
    selectedFrom: IPlace,
    selectedTo: IPlace,
    validFrom: boolean,
    validTo: boolean
}

const InitialState:PlaceSuggestions = {
    fromSuggestions: null,
    toSuggestions: null,
    selectedFrom: null,
    selectedTo: null,
    validFrom: false,
    validTo: false
}

export function PlaceSuggestionsReducer(state:PlaceSuggestions = InitialState, action: Action){
    switch (action.type) {
        case PlaceActions.GET_FROM_PLACE_SUGGESTION:
            return {...state, fromSuggestions: [], validFrom: false};

        case PlaceActions.GET_FROM_PLACE_SUGGESTION_SUCCESS:
            return {...state, fromSuggestions: action.payload};

        case PlaceActions.GET_TO_PLACE_SUGGESTION:
            return {...state, toSuggestions: [], validTo: false};

        case PlaceActions.GET_TO_PLACE_SUGGESTION_SUCCESS:
            return {...state, toSuggestions: action.payload};

        case PlaceActions.SELECT_FROM_SUGGESTION:
            return {...state, selectedFrom: action.payload, validFrom: true};

        case PlaceActions.SELECT_TO_SUGGESTION:
            return {...state, selectedTo: action.payload, validTo: true};

        default:
            return state;
    }
}
